
import "./styles.css"

export function CartaAprendiz({aprendices}) {
    const url = aprendices.foto;
    return(<li className="carta">
        
        <img width={250}
        height={250}
        className="estiloimagen"
        src={url}
        alt="Aprendiz 2"/>
        <div>{aprendices.nombre}</div>
        <div className="cartagenero">Genero: {aprendices.genero}</div>
    </li>)
}