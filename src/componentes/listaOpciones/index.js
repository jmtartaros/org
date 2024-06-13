import "./ListaOpciones.css";

const ListOpciones = (props) => {

    const manejarCambio = (e) => {
        props.upDateTeam(e.target.value)
    }
    return <div className="list-op">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListOpciones;