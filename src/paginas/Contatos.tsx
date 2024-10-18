import "./paginas.css"
import foto_monitor from "../assets/fotos/Card_monitor.png"
import foto_duvida from "../assets/fotos/card_duvida.png"

export default function Contatos(){
  return(
    <>  
       <div className="Contatos">
        <img className="imagem"src={foto_monitor} />
        <img className="imagem"src={foto_duvida} />
      </div>
    </>
  )
}