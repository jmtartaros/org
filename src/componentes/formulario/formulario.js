import { useState } from "react";
import "./formulario.css";
import CampoTexto from "../inputForm";
import ListOpciones from "../listaOpciones";
import Btn from "../Boton";



const Formulario = (props) => {
    const [name, upDateName] = useState("");
    const [position, upDatePosition] = useState("");
    const [photo, upDatePhoto] = useState("");
    const [team, upDateTeam] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");
    const { registrarColaborador, crearEquipo } = props;


    const manejoDeEnvio = (e) => {
        e.preventDefault();
        let look = {
            name,
            position,
            photo,
            team
        }
        registrarColaborador(look);
    };

    const manejarEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorPrimario: color });
    }

    return (
        <section className="formulario">
            <form onSubmit={manejoDeEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto
                    titulo="Nombre"
                    placeholder="Ingrese nombre"
                    required
                    valor={name}
                    actualizarValor={upDateName}
                />
                <CampoTexto
                    titulo="Puesto"
                    placeholder="Ingrese puesto"
                    required
                    valor={position}
                    actualizarValor={upDatePosition}
                />
                <CampoTexto
                    titulo="Foto"
                    placeholder="Ingrese enlace de foto"
                    required
                    valor={photo}
                    actualizarValor={upDatePhoto}
                />
                <ListOpciones
                    valor={team}
                    upDateTeam={upDateTeam}
                    equipos={props.equipos}
                />
                <Btn texto="Crear" />
            </form>
            <form onSubmit={manejarEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <CampoTexto
                    titulo="Titulo"
                    placeholder="Ingrese titulo"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                />
                <CampoTexto
                    titulo="Color"
                    placeholder="Ingresar el color en hexadecimal"
                    required
                    valor={color}
                    actualizarValor={actualizarColor}
                    type="color"
                />
                <Btn texto="Registrar Equipo" />
            </form>
        </section>
    );
};

export default Formulario;
