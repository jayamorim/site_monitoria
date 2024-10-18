import "../barraTopo/barratopo.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/fotos/Brasão_Ufal.png";
import Logo_react from "../../assets/fotos/Logo_react_pequena.png";

export default function BarraTopo() {
  return (
    <>
      <div className="topo">
        <a
          href="https://arapiraca.ufal.br/unidades-de-ensino/penedo"
          target="_blank"
        >
          <img src={Logo_react} className="logo" alt="logo" />
        </a>

        <a
          href="https://arapiraca.ufal.br/unidades-de-ensino/penedo"
          target="_blank"
        >
          <img src={Logo} className="logo" alt="Brasão_Ufal" />
        </a>

        <h1 className="titulo">Monitoria Web 1</h1>

        <div className="topoCentro ">
          <ul className="topoLista">
            <Link to="/">
              <li className="topoListaItem">Home</li>
            </Link>
            <Link to="/Duvidas">
              <li className="topoListaItem">Duvidas</li>
            </Link>
            <Link to="/Contatos">
              <li className="topoListaItem">Contatos</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
