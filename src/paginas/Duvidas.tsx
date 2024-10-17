import "./paginas.css";
import { Card } from "../componets/card/Card ";
import { Dados } from "../utils/Dados";


export default function Home() {
  const items_caixas: { id: string; duvida: string; texto: string; link:string; foto: string }[] = Dados;

  
  return (
    <>
      <div className="Home">
        <h2>DUVIDAS</h2>
        <ul>
          {
            items_caixas.map
            (
                    (
                      item: { id: string; duvida: string; texto: string; link:string; foto: string },
                      id: number
                    ) => (
                          <Card key={id} titulo={item.duvida} corpo={item.texto} link={item.link} foto={item.foto}/>
                        )
            )
          }
        </ul>
      </div>
    </>
  );
}
