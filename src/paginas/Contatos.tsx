import "./paginas.css";
import foto from "../assets/fotos/monitor.png";
import { useState } from "react";

export default function Contatos() {
  const [message, setMessage] = useState("");

  async function SendMessage() {
    // Abrir o WhatsApp com a mensagem pré-preenchida
    if (message !== "") {
      window.open(
        `https://api.whatsapp.com/send?phone=82998313717&text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    }
  }

  return (
    <>
      <div className="contener">
        <div className="monitor">
          <div className="primeiro_contaner">
            <div className="titulo">Seu Monitor</div>
            <img className="imagem_monitor" src={foto} />
          </div>
          <div className="paragrafo">
            <p>
              Olá! Sou Jay Anderson Amorim, monitor da disciplina de WEB1. Sou
              estudante de Sistemas de Informação na Universidade Federal de
              Alagoas e tenho experiência com desenvolvimento web, especialmente
              na tecnologia React. Minha missão aqui é ajudar você a superar
              desafios e aprofundar seu conhecimento. Estou disponível para
              esclarecer suas dúvidas e fornecer orientações para que você possa
              dominar os conceitos e práticas abordadas na disciplina. Conte
              comigo nessa jornada de aprendizado!
            </p>
          </div>
          <div className="agendamento">
            <div className="titulo">Solicite seu Agendamento</div>
            <div className="telefone"> 82 998313717</div>
            <div className="email">jay.amorim@arapiraca.ufal.br</div>
            <div className="horarios">
              Sala de estudos - todos os dias Horários das 18:00 as 19:00
            </div>

            <a
              href="https://meet.google.com/nfw-pbif-xxk"
              target="_blank"
            >
              <div className="meet">https://meet.google.com/apz-qofk-rpn</div>
            </a>
          </div>
        </div>
        <div className="segundo_contaner">
          <div className="duvida_premeiro_contener">
            <div className="titulo">Não fique com Duvida</div>
            <p className="paragrafo2">
              Tem alguma dúvida sobre React? Utilize o campo ao lado para
              escrever suas perguntas. Seja sobre conceitos, código, erros, ou
              melhores práticas, estou pronto para ajudar você a entender e
              avançar na disciplina. Aproveite este espaço para esclarecer suas
              dúvidas e melhorar sua jornada de aprendizado!
            </p>
          </div>
          <div className="duvida_segundo_contener">
            <div className="titulo">Escreva aqui todas as suas dúvidas</div>
            <textarea
              className="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <img></img>
            <button onClick={SendMessage}> enviar</button>
          </div>
        </div>
      </div>
    </>
  );
}
