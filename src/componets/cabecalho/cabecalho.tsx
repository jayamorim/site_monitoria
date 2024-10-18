
import  Home  from "../../paginas/Home"
import  Duvidas  from "../../paginas/Duvidas"
import  Contatos  from "../../paginas/Contatos"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom"
import BarraTopo from "../barraTopo/BarraTopo"


export const Cabecalho = () => {
  return (
    <>

<Router>
  <BarraTopo />       
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/Duvidas" element={<Duvidas />} />
      <Route  path="/Contatos" element={<Contatos />} />

    
    </Routes>

</Router> 
     
    </>
  )
}