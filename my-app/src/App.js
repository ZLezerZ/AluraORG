import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/ZLezerZ.png",
      nombre: "Lezer Zeta",
      puesto: "Imaginador de Tierras",
      fav: true
    },
    {
      id: uuidv4(),
      nombre: "Julia Mágica",
      puesto: "Dictadora de la Verdad y la Razón",
      foto: "https://github.com/juliascode96.png",
      equipo: "Programación",
      fav: true
    },
    {
      id: uuidv4(),
      nombre: "Agustín Conde",
      puesto: "Promulgador del Activismo",
      foto: "https://github.com/agusconde18.png",
      equipo: "Móvil",
      fav: true
    },
    {
      id: uuidv4(),
      nombre: "Loco Joe",
      puesto: "Coronel del bastión Oeste",
      foto: "https://th.bing.com/th/id/OIG3.7FAeb2.84HdQaEJXTkWL?pid=ImgGn",
      equipo: "Back End",
      fav: false
    }
  ]);
  //Armaremos un objeto con todas las propiedades para cada equipo
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
    {
      id: uuidv4(),
      titulo: "Back End",
      colorPrimario: "#DB4EBF",
      colorSecundario: "#FAE9F4"
    }
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };
  //Busquemos la información del nuevo colaborador que se va creando en el formjulario

  const registrarColaborador = (colaborador) => {
    //Los tres puntos más el arreglo coma el elemento, se llama Spread  Operator y sirve para hacer una copia del arreglo y agregarle acontinuaciión a esa copia el siguiente elemento
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) =>{
    const nuevosColaboradores = colaboradores.filter((colaborador) => { 
      return colaborador.id !== id
    });
    actualizarColaboradores(nuevosColaboradores);
  };


  //Actualizar color de equipo
  const actualizarColor = (color, id) =>{
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }

  //Botón de Like
  const manejarLike = (id) =>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }
  return (
    <div>
      <Header />
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {/*También se puede escribir el operador ternario así: mostrarFormulario ? <Formulario/>: <></>*/}
      {mostrarFormulario === true ? (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      ) : (
        <></>
      )}

      {/*Cómo recorrer un arreglo*/}
      {equipos.map((equipo) => {
        return (
          <Equipo
            datos={equipo}
            key={equipo.id}
            colaboradores={colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            manejarLike={manejarLike}
          />
        );
      })}
      {/*También se podría escribir así: equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo}/>  Sin el return, sin las llaves y en una sola línea  */}

      <Footer></Footer>
    </div>
  );
}

export default App;
