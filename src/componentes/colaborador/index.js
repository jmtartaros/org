import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { name, position, photo, id, fav } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props;
    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar" />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={photo} alt={name} />
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{position}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
        </div>
    </div>
}

export default Colaborador;