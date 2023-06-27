import { CartaAprendiz } from "./CartaAprendiz"
import Aprendices from "./aprendices.json"
import "./stylescarta.css"

export function ListadoAprendices() {
    return(<ul className="estilotodaslascartas">
        {Aprendices.map((aprendices)=>(
            <CartaAprendiz aprendices={aprendices}/>
        ))}
    </ul>)
}