import React from 'react';
import FaqItem from './FaqItem';
import './FAQ.css'

const FAQ = () => {
  const faqData = [
    {
      pergunta: "Como funciona a terapia?",
      resposta:
        "A terapia é um espaço seguro e confidencial em que você conversa com um psicólogo sobre suas emoções, pensamentos e experiências. O profissional ajuda a identificar desafios, oferecer novos insights e desenvolver estratégias para lidar com as dificuldades de forma saudável. O processo varia de pessoa para pessoa, sendo sempre adaptado às suas necessidades."
    },
    {
      pergunta: "Quanto tempo dura uma sessão de terapia?",
      resposta:
        "As sessões geralmente duram entre 50 minutos à 1 hora. O horário será combinado com o psicólogo, e a frequência pode ser semanal, quinzenal ou definida conforme sua disponibilidade e objetivo terapêutico."
    },
    {
      pergunta: "Preciso estar com problemas graves para começar a terapia?",
      resposta:
        "Não! A terapia não é apenas para lidar com crises. Ela também é um espaço para autoconhecimento, desenvolvimento pessoal e melhoria do bem-estar emocional. Qualquer pessoa interessada em cuidar da saúde mental pode se beneficiar."
    },
    {
      pergunta: "Como escolho o psicólogo certo para mim?",
      resposta:
        "Escolher um psicólogo pode envolver considerar a formação do profissional, as abordagens utilizadas e até mesmo a afinidade pessoal. Não hesite em marcar uma primeira consulta para conhecer o psicólogo e verificar se você se sente à vontade."
    },
    {
      pergunta: "O que acontece na primeira sessão?",
      resposta:
        "Na primeira consulta, o psicólogo geralmente faz perguntas para entender melhor o motivo que te levou à terapia e suas expectativas. É um momento para você compartilhar suas dúvidas e conhecer mais sobre como o processo funciona."
    },
    {
      pergunta: "Tudo o que eu disser na terapia é confidencial?",
      resposta:
        "Sim, o psicólogo segue um código de ética que garante a confidencialidade das informações compartilhadas em sessão. A exceção ocorre apenas em situações em que há risco iminente à vida, como pensamentos suicidas ou violência grave, quando medidas podem ser tomadas para proteger o paciente ou terceiros."
    },
    {
      pergunta: "Em quanto tempo vou perceber resultados?",
      resposta:
        "Isso varia para cada pessoa e depende do objetivo da terapia. Algumas mudanças podem ser percebidas rapidamente, enquanto outras podem levar mais tempo. O mais importante é respeitar seu ritmo e se dedicar ao processo."
    },
    {
      pergunta: "E se eu não souber o que dizer durante a sessão?",
      resposta:
        "Isso é completamente normal! O psicólogo está ali para guiar a conversa e ajudar você a organizar seus pensamentos. Não existe certo ou errado no que dizer na terapia."
    },
    {
      pergunta: "Terapia pode resolver todos os meus problemas?",
      resposta:
        "A terapia é uma ferramenta poderosa, mas não oferece soluções mágicas. Ela ajuda você a entender melhor seus desafios e encontrar caminhos para enfrentá-los de forma mais saudável e consciente."
    },
    {
      pergunta: "Qual a diferença entre psicólogo, psiquiatra e terapeuta?",
      resposta:
        "O psicólogo trabalha com terapia para tratar questões emocionais e comportamentais, sem prescrever medicamentos. O psiquiatra é um médico que pode diagnosticar condições mentais e prescrever medicamentos quando necessário. O termo terapeuta é mais amplo e pode incluir outros profissionais que trabalham com diferentes abordagens de cuidado emocional e físico, como terapias ocupacionais ou corporais."
    },
    {
      pergunta: "Qual a frequência das Consultas?",
      resposta:
        "A frequência das consultas é ajustada conforme suas necessidades e objetivos terapêuticos. Geralmente, as sessões ocorrem semanalmente, mas podem ser quinzenais ou adaptadas de acordo com cada caso."
    },
    {
      pergunta: "Quais os valores das Sessões?",
      resposta:
        "Os valores das sessões são informados mediante contato direto. Entre em contato para esclarecer dúvidas e receber informações personalizadas."
    },
    {
      pergunta: "Quais os planos de Saúde Atendidos?",
      resposta:
        "Atualmente, atendo pacientes por meio dos seguintes planos de saúde (listar os planos caso aplicável). Para saber mais sobre reembolso ou outros convênios, entre em contato."
    }
  ];

  return (
    <section id="faq">
      <h2>Perguntas Frequentes</h2>
      <ol className="listas">
        <div className="lista1">
          {faqData.slice(0, 7).map((item, index) => (
            <FaqItem key={index} pergunta={item.pergunta} resposta={item.resposta} />
          ))}
        </div>
        <div className="lista1">
          {faqData.slice(7).map((item, index) => (
            <FaqItem key={index} pergunta={item.pergunta} resposta={item.resposta} />
          ))}
        </div>
      </ol>
    </section>
  );
};

export default FAQ;
