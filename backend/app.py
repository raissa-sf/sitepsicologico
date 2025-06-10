
# API (Application Programming Interface) é uma forma de permitir que diferentes sistemas "conversem" entre si. No contexto de web, uma API é como um cardápio de um restaurante:
#   -> O cliente (por exemplo, o site da clinica) escolhe uma ação (como "buscar usuários").
#   -> O servidor (onde está a API) responde com os dados (como uma lista de usuários em formato JSON).

#O que esse código faz?
#Esse código cria uma API web usando o framework Flask para gerenciar usuários em um sistema.
#Ele permite cadastrar, consultar, atualizar e excluir usuários – isso é o que chamamos de um 
# CRUD (Create, Read, Update, Delete).

#IMPORTS e seus significados
#Flask: framework que permite criar uma API web.
#request: permite acessar dados que o cliente envia (como JSON).
#jsonify: transforma dados em JSON para enviar como resposta.
#SQLAlchemy: biblioteca para interagir com o banco de dados de forma fácil (ORM).
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy 
from sqlalchemy.types import TypeDecorator, String
from datetime import datetime, date, time
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
# Configuração do banco de dados SQLite
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///clinica.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app) # Conecta o SQLAlchemy ao Flask.

# Classe/Modelo de usuário

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    nome = db.Column(db.String(120), nullable=False)
    senha = db.Column(db.String(100), nullable=False)
    telefone = db.Column(db.String(20), nullable=False)
    cpf = db.Column(db.String(14), unique=True, nullable=False)
    tipo_usuario = db.Column(db.String(50), nullable=False)

    #esse é um método da classe usuario que representa a forma textual do objeto usuario
    #ele pode ser chamado quando é necessário imprimir o seu valor
    def __repr__(self):
        return f'<Usuario {self.email}>'


#Verbos HTTP (ou métodos HTTP) são as ações que o cliente (site da clinica) pode pedir para o servidor (API+Banco dedados) realizar
#sobre algum recurso (como um usuário, agendamento, login, etc).

#| Ação do CRUD | Verbo HTTP      | O que faz                      |
#| ------------ | --------------- | ------------------------------ |
#| Create       | `POST`          | Criar um novo recurso          |
#| Read         | `GET`           | Ler ou buscar informações      |
#| Update       | `PUT` / `PATCH` | Atualizar um recurso existente |
#| Delete       | `DELETE`        | Apagar um recurso existente    |

# Pensando num contexto de correios
# | Verbo    | O que você faz                           |
# | -------- | ---------------------------------------- |
# | `POST`   | Escreve e envia uma nova carta           |
# | `GET`    | Lê as cartas recebidas                   |
# | `PUT`    | Substitui uma carta por outra atualizada |
# | `DELETE` | Rasga e joga uma carta fora              |

# Rota para cadastro de usuário POST
@app.route('/cadastro', methods=['POST'])
def cadastrar_usuario():
    dados = request.get_json()

    email = dados.get('email')
    nome = dados.get('nome')
    senha = dados.get('senha')
    telefone = dados.get('telefone')
    cpf = dados.get('cpf')
    tipo_usuario = dados.get('tipo_usuario', '').lower()

    if not email or not nome or not senha or not telefone or not cpf or not tipo_usuario:
        return jsonify({'erro': 'Todos os campos sao obrigatorios'}), 400

    if Usuario.query.filter_by(email=email).first():
        return jsonify({'erro': 'Email ja cadastrado'}), 409

    if Usuario.query.filter_by(cpf=cpf).first():
        return jsonify({'erro': 'CPF já cadastrado'}), 409
    
    if tipo_usuario not in ['paciente', 'psicologo']:
        return jsonify({'erro': 'Tipo de usuário invalido'}), 400

    novo_usuario = Usuario(
        email=email,
        nome=nome,
        senha=senha,
        telefone=telefone,
        cpf=cpf,
        tipo_usuario=tipo_usuario
    )
    db.session.add(novo_usuario)
    db.session.commit()

    return jsonify({'mensagem': 'Usuario cadastrado com sucesso'}), 201

# Rota para obter todos os usuários
@app.route('/usuarios', methods=['GET'])
def listar_usuarios():
    usuarios = Usuario.query.all()
    lista = []
    for usuario in usuarios:
        lista.append({
            'id': usuario.id,
            'email': usuario.email,
            'senha': usuario.senha,
            'nome': usuario.nome,
            'telefone': usuario.telefone,
            'cpf': usuario.cpf,
            'tipo_usuario': usuario.tipo_usuario
        })
    return jsonify(lista), 200

# Rota para obter um usuário por ID
@app.route('/usuarios/<int:id>', methods=['GET'])
def obter_usuario(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({'erro': 'Usuario nao encontrado'}), 404

    return jsonify({
        'id': usuario.id,
        'email': usuario.email,
        'nome': usuario.nome,
        'telefone': usuario.telefone,
        'cpf': usuario.cpf,
        'tipo_usuario': usuario.tipo_usuario
    }), 200

# Rota para obter um usuário por tipo 
@app.route('/usuarios/<string:tipo_usuario>', methods=['GET'])
def obter_usuarios_tipo(tipo_usuario):
    Usuarios = Usuario.query.filter_by(tipo_usuario=tipo_usuario).all()
    if not Usuarios:
        return jsonify({'erro': 'Psicologo nao encontrado'}), 404
    
    listaUsuarios = []

    for psicologo in Usuarios:
        listaUsuarios.append(
            {
                'id': psicologo.id,
                'email': psicologo.email,
                'nome': psicologo.nome,
                'telefone': psicologo.telefone,
                'cpf': psicologo.cpf,
                'tipo_usuario': psicologo.tipo_usuario
            })

    return jsonify(listaUsuarios), 200


# Rota para atualizar um usuário
@app.route('/usuarios/<int:id>', methods=['PUT'])
def atualizar_usuario(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({'erro': 'Usuario nao encontrado'}), 404

    dados = request.get_json()
    usuario.email = dados.get('email', usuario.email)
    usuario.nome = dados.get('nome', usuario.nome)
    usuario.senha = dados.get('senha', usuario.senha)
    usuario.telefone = dados.get('telefone', usuario.telefone)
    usuario.cpf = dados.get('cpf', usuario.cpf)
    usuario.tipo_usuario = dados.get('tipo_usuario', usuario.tipo_usuario)

    db.session.commit()
    return jsonify({'mensagem': 'Usuario atualizado com sucesso'}), 200

# Rota para deletar um usuário
# Normalmente não precisa enviar corpo na requisição DELETE.
@app.route('/usuarios/<int:id>', methods=['DELETE'])
def deletar_usuario(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({'erro': 'Usuario nao encontrado'}), 404

    db.session.delete(usuario)
    db.session.commit()
    return jsonify({'mensagem': 'Usuario deletado com sucesso'}), 200

# Rota de login
@app.route('/login', methods=['POST'])
def login():
    dados = request.get_json()

    email = dados.get('email')
    senha = dados.get('senha')

    if not email or not senha:
        return jsonify({'erro': 'Email e senha sao obrigatorios'}), 400

    usuario = Usuario.query.filter_by(email=email).first()

    if not usuario:
        return jsonify({'erro': 'Usuario nao encontrado'}), 404

    # Se estiver usando senhas em texto puro:
    if usuario.senha != senha:
        return jsonify({'erro': 'Senha incorreta'}), 401

    # Se usar hashing futuramente, troque a linha acima por:
    # if not check_password_hash(usuario.senha, senha):

    return jsonify({
        'mensagem': 'Login realizado com sucesso',
        'usuario': {
            'id': usuario.id,
            'nome': usuario.nome,
            'tipo_usuario': usuario.tipo_usuario
        }
    }), 200


# TypeDecorator para armazenar horário como texto

class TimeType(TypeDecorator):
    impl = String
    
    def process_bind_param(self, value, dialect):
        if isinstance(value, time):
            return value.strftime('%H:%M:%S')
        return value
    
    def process_result_value(self, value, dialect):
        if value:
            return datetime.strptime(value, '%H:%M:%S').time()
        return value
    
#Classe Agendamento

class Consulta(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.Date, nullable=False)
    horario = db.Column(TimeType(), nullable=False)
    paciente_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    psicologo_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)

    paciente = db.relationship('Usuario', foreign_keys=[paciente_id], backref='consultas_paciente')
    psicologo = db.relationship('Usuario', foreign_keys=[psicologo_id], backref='consultas_psicologo')

# Inicializar o banco de maneira automatica, o db.create_all() vai pegar as configurações com o nome do banco
# e as classes mapeadas e transcrever isso em um novo banco de dados se ele ainda não existir.
with app.app_context():
    db.create_all()


# Rota para criar consulta
@app.route('/consultas', methods=['POST'])
def criar_consulta():
    dados = request.get_json()
    data_consulta = dados.get('data')
    horario_consulta = dados.get('horario')
    paciente_id = dados.get('paciente_id')
    psicologo_id = dados.get('psicologo_id')

    # Validar campos obrigatórios
    for campo in ('data', 'horario', 'paciente_id', 'psicologo_id'):
        if campo not in dados: 
            return jsonify({'erro':f'Campo {campo} é obrigatório'}), 400

    try:
        data_consulta = datetime.strptime(dados['data'], '%Y-%m-%d').date()
        horario_consulta = datetime.strptime(dados['horario'], '%H:%M').time()
    except ValueError:
        return jsonify({'erro': 'Formato de data ou horario invalido'}), 400
    
    # Buscar usuários
    paciente = Usuario.query.filter_by(id=dados['paciente_id'], tipo_usuario='paciente').first()
    psicologo = Usuario.query.filter_by(id=dados['psicologo_id'], tipo_usuario='psicologo').first()

    if not paciente:
        return jsonify({'erro': 'Paciente nao encontrado ou tipo invalido'}), 404
    if not psicologo:
        return jsonify({'erro':'Psicologo nao encontrado ou tipo invalido'}), 404

    
    # Verificar se há conflito de horário na agenda do psicólogo
    conflito = Consulta.query.filter_by(data=data_consulta, horario=horario_consulta, psicologo_id=psicologo.id).first()
    if conflito:
        return jsonify({'erro': 'Horario ja ocupado para esse psicologo'}), 409
    
    consulta = Consulta(
        data=data_consulta,
        horario=horario_consulta,
        paciente_id=paciente.id,
        psicologo_id=psicologo.id
    )
    db.session.add(consulta)
    db.session.commit()

    return jsonify({'mensagem':'Consulta agendada com sucesso'}), 201

# Rota para listar consultas de um paciente ou psicólogo
@app.route('/consultas/usuario/<int:usuario_id>', methods=['GET'])
def listar_consultas_por_usuario(usuario_id):
    usuario = Usuario.query.get(usuario_id)
    if not usuario:
        return jsonify({'erro': 'Usuario nao encontrado'}), 404

    if usuario.tipo_usuario == 'paciente':
        consultas = Consulta.query.filter_by(paciente_id=usuario_id).all()
    elif usuario.tipo_usuario == 'psicologo':
        consultas = Consulta.query.filter_by(psicologo_id=usuario_id).all()
    else:
        return jsonify({'erro': 'Tipo de usuario invalido'}), 400

    resultado = []
    for c in consultas:
        resultado.append({
            'id': c.id,
            'data': c.data.strftime('%d/%m/%Y'),
            'hora': c.horario.strftime('%H:%M'),
            'nomePaciente': c.paciente.nome,
            'psicologo': c.psicologo.nome
        })
    return jsonify(resultado), 200


# Rota para listar todas as consultas
@app.route('/consultas', methods=['GET'])
def listar_consultas():
    consultas = Consulta.query.all()
    resultado = []
    for c in consultas:
        resultado.append({
            'id': c.id,
            'data': c.data.strftime('%Y-%m-%d'),
            'horario': c.horario.strftime('%H:%M'),
            'paciente': c.paciente.nome,
            'psicologo': c.psicologo.nome
        })
    return jsonify(resultado)

# Rota para atualizar data, hoario e psicólogo de uma consulta
@app.route('/consultas/<int:consulta_id>', methods=['PUT'])
def atualizar_consulta(consulta_id):
    dados = request.get_json()
    consulta = Consulta.query.get_or_404(consulta_id)

    try:
        if 'data' in dados:
            consulta.data = datetime.strptime(dados['data'], '%Y-%m-%d').date()
        if 'horario' in dados:
            consulta.horario = datetime.strptime(dados['horario'], '%H:%M').time()
        if 'psicologo_id' in dados:
            psicologo = Usuario.query.filter_by(id=dados['psicologo_id'], tipo_usuario='psicologo').first()
            if not psicologo:
                return jsonify({'erro':'Psicologo nao encontrado ou tipo invalido'}), 404
            consulta.psicologo_id = psicologo.id

        # Verifica se já existe ums consulta com o mesmo horário, data e psicólogo
        conflito = Consulta.query.filter(
            Consulta.id != consulta.id, 
            Consulta.data == consulta.data,
            Consulta.horario == consulta.horario,
            Consulta.psicologo_id == consulta.psicologo_id
        ).first()
        if conflito:
            return jsonify({'erro':'Ja existe uma consulta para esse horario com esse psicologo'}), 409
        
        db.session.commit()
        return jsonify({'mensagem':'Consulta atualizada com sucesso'})
    except Exception as e:
        return jsonify({'erro':str(e)}), 400
    
# Rota para excluir uma consulta
@app.route('/consultas/<int:consulta_id>', methods=['DELETE'])
def excluir_consulta(consulta_id):
    consulta = Consulta.query.get_or_404(consulta_id)

    db.session.delete(consulta)
    db.session.commit()

    return jsonify({'mensagem':'Consulta excluida com sucesso'})

# Executar o app
if __name__ == '__main__':
    app.run(debug=True)
