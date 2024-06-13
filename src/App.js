import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/footer';
import { v4 as uuid } from "uuid";
function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      name: "Jorge Tuchán",
      position: "Junior",
      photo: "https://i.pinimg.com/originals/07/98/e5/0798e5e225387b7f6e73d65715e43508.jpg",
      team: "Front End",
      fav: false
    },
    {
      id: uuid(),
      name: "Jorge Tuchán",
      position: "Junior",
      photo: "https://i.pinimg.com/originals/07/98/e5/0798e5e225387b7f6e73d65715e43508.jpg",
      team: "Movil",
      fav: false
    },
    {
      id: uuid(),
      name: "Jorge Tuchán",
      position: "Junior",
      photo: "https://i.pinimg.com/originals/07/98/e5/0798e5e225387b7f6e73d65715e43508.jpg",
      team: "Programación",
      fav: false
    },
    {
      id: uuid(),
      name: "Jorge Tuchán",
      position: "Junior",
      photo: "https://i.pinimg.com/originals/07/98/e5/0798e5e225387b7f6e73d65715e43508.jpg",
      team: "Devops",
      fav: true
    }
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      id: uuid(),
      titulo: "Ux y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf"
    }
  ]);
  const showForm = () => {
    actualizarMostrar(!mostrarFormulario);
  }
  //*Forma uno =>{mostrarFormulario === true ? <Formulario/> : <></>}
  //*Forma dos =>{mostrarFormulario &&  <Formulario/> }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id);
    const newColaborador = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(newColaborador);
  }

  const actualizarColor = (color, id) => {
    console.log("Actualizar", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados);
  }


  const registrarColaborador = (colaborador) => {
    console.log("se registro el nuevo colaborador: ", colaborador);
    // spreed operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div className="App">
      {/* las llaves nos sirve para llamar al componente */}
      {/* {Header()}  */}
      <Header />
      {/* {mostrarFormulario === true ? <Formulario/> : <></>} */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg actualizarMostrar={showForm} />
      {/* <Equipo team="Hola mundo" /> */}
      {
        equipos.map((equipo) =>
          <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.team === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
