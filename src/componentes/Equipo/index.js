import "./Equipo.css"
import Colaborador from "../colaborador";
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
    //destructuracion
    const { colorPrimario, titulo, id } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const obj = { backgroundColor: hexToRgba(colorPrimario, 0.6) }
    // props.datos.colorSecundario o primario o el titulo nos ahorraria codigo
    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(e) => {
                        actualizarColor(e.target.value, id)
                    }}
                />
                <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;