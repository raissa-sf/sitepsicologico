import React, { useState, useEffect } from 'react';
import CalendarioInput from './CalendarioInput';
import { useNavigate } from 'react-router-dom';
import './Agendamento.css';

const AgendamentoForm = () => {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({
    mensagem: '',
    data: null,
    horario: '',
    usuario_id: '', 
  });

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        if(usuario.tipo_usuario === "psicologo"){
          const response = await fetch('http://localhost:5000/usuarios/paciente'); 
          if (!response.ok) throw new Error('Erro ao buscar pacientes');
          const dados = await response.json();
          setUsuarios(dados);
        }
        else if(usuario.tipo_usuario === "paciente"){
          const response = await fetch('http://localhost:5000/usuarios/psicologo'); 
          if (!response.ok) throw new Error('Erro ao buscar psicologos');
          const dados = await response.json();
          setUsuarios(dados);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchUsuarios();
  }, [usuario]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, data: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usuario) {
      alert('Usuário não logado.');
      return;
    }

    if (!formData.usuario_id) {
      alert('Por favor, selecione um psicólogo.');
      return;
    }

    const dataFormatada = formData.data ? formData.data.toISOString().split('T')[0] : null;

    if (!dataFormatada || !formData.horario) {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    const novaConsulta = decideUsuarioObjeto(usuario, formData.usuario_id, dataFormatada, formData.horario);

    try {
      const response = await fetch('http://localhost:5000/consultas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaConsulta),
      });

      if (!response.ok) {
        const erroData = await response.json();
        throw new Error(erroData.erro || 'Erro ao agendar consulta');
      }

      navigate('/acesso');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section>
      <h2>Agendamento de Consulta</h2>

      <form className="formagendamento" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario_id">{decideUsuarioTexto(usuario.tipo_usuario)}:</label>
          <select
            id="usuario_id"
            name="usuario_id"
            value={formData.usuario_id}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um {decideUsuarioTexto(usuario.tipo_usuario)}</option>
            {usuarios.map((usuario) => (
              <option key={usuario.id} value={usuario.id}>
                {usuario.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="data"></label>
          <CalendarioInput selectedDate={formData.data} onChange={handleDateChange} />
        </div>

        <div>
          <label htmlFor="horario">Horário:</label>
          <input
            type="time"
            id="horario"
            name="horario"
            min="08:00"
            max="18:00"
            step="1800"
            value={formData.horario}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Agendar</button>
      </form>
    </section>
  );
};

function decideUsuarioTexto(usuario){
  if(usuario === "paciente")
    return "psicólogo(a)";
  else if(usuario === "psicologo")
    return "paciente";
}

function decideUsuarioObjeto(usuario, formDataUsuarioId, formDataData, formDataHorario){
  if(usuario.tipo_usuario === "paciente")
    return {
      paciente_id: usuario.id,
      psicologo_id: Number(formDataUsuarioId),
      data: formDataData,
      horario: formDataHorario,
    };
  else if(usuario.tipo_usuario === "psicologo")
    return {
      paciente_id: Number(formDataUsuarioId),
      psicologo_id: usuario.id,
      data: formDataData,
      horario: formDataHorario,
    };
}

export default AgendamentoForm;
