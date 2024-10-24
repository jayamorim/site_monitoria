import "./paginas.css";
import { Card } from "../componets/card/Card ";
import { Dados } from "../utils/Dados";

export default function Duvidas() {
  const items_caixas: {
    id: string;
    duvida: string;
    texto: string;
    link: string;
    foto: string;
  }[] = Dados;

  return (
    <>
      <div className="Duvidas">
        <h2>DUVIDAS DUVIDAS DUVIDAS DUVIDAS DUVIDAS DUVIDAS</h2>
        <ul className="cardUl">
          {items_caixas.map(
            (
              item: {
                id: string;
                duvida: string;
                texto: string;
                link: string;
                foto: string;
              },
              id: number
            ) => (
              <Card
                key={id}
                titulo={item.duvida}
                corpo={item.texto}
                link={item.link}
                foto={item.foto}
              />
            )
          )}
        </ul>
      </div>
    </>
  );
}
