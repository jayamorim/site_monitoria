import "./Card.css"; // Estilos CSS importados

export const Card = ({ titulo, corpo, link, foto }) => {
  return (
    <div className="card-container">
      <div className="card-titulo">{titulo}</div>
      <div className="card-corpo">{corpo}</div>
      {/* <img src={foto} /> */}
      <div className="card-pedido">
        <a className="card-link" href={link} target='_blank'>
          Saiba mais
        </a>
      </div>
    </div>
  );
};
