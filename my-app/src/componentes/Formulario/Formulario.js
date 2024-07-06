import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";
const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {crearEquipo} = props

    const manejarEnvios = (evento) =>{
        evento.preventDefault();
        let datosAEnviar = {
            nombre: nombre, //TAMBIÉN Se podría poner solamente "nombre" o "puesto" o "foto", sin el patrón llave valor, react entiende que se llamaría igual tanto la llave como el valor
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        props.registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({
            titulo: titulo,
            colorPrimario: color
        })
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvios}>
            <h2 className="">Rellena el formulario para crear el colaborador</h2>
            <Campo titulo="Nombre"
            placeholder="Ingrese el nombre" 
            required = {true} 
            valor = {nombre} 
            actualizarValor={actualizarNombre}/>

            <Campo titulo="Puesto"
            placeholder="Ingrese el puesto" 
            required 
            valor = {puesto}
            actualizarValor={actualizarPuesto}/>

            <Campo titulo="Foto" 
            placeholder="Ingrese enlace de foto" 
            required
            valor={foto}
            actualizarValor={actualizarFoto}/>
            <ListaOpciones
            valor={equipo}
            equipos={props.equipos}
            actualizarEquipo={actualizarEquipo}/>
            <Boton texto="Crear"/>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2 className="">Rellena el formulario para registrar el equipo</h2>
            <Campo 
            titulo="Titulo"
            placeholder="Ingrese el nombre del equipo" 
            required = {true} 
            valor = {titulo} 
            actualizarValor={actualizarTitulo}
            />

            <Campo 
            titulo="Color"
            placeholder="Ingrese el color del equipo en HEX" 
            required 
            valor = {color}
            actualizarValor={actualizarColor}
            type={"color"}
            />

            <Boton texto={"Registrar Equipo"}></Boton>
        </form>

    </section>
}

export default Formulario;