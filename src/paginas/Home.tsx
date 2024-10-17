import "./paginas.css";
import foto from "../assets/fotos/pag1.png";

export default function Home() {
  return (
    <>
      <div className="Home">
        <img className="imagem" src={foto} />
      </div>
    </>
  );
}
