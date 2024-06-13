// import { useState } from "react"
import "./CampoText.css"

const CampoTexto = (props) => {
    // const [valor, actualizarValor] = useState("");

    const { type = "text" } = props;

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    const placeholderMondificado = `${props.placeholder}...`;
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        {/* <input placeholder = {`Ingrese su ${props.titulo}`} /> */}
        <input
            placeholder={placeholderMondificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default CampoTexto;