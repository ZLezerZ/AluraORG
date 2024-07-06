import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    
    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value);
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}> {/*También es necesario colocarle al select el atributo value con las props del valor que estamos trayendo del formulario para que funcione el pseudoplaceholder*/}
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option> {/* Este option es para que se muestre como si fuer aun placeHolder, porque de otro modo lo primer que se muestra siempre es la primera opción (que sería programación) */}
            {props.equipos.map((equipo, index) =>{
                return <option key={index} value={equipo}>{equipo}</option>
            } ) }
        </select>
    </div>
} ;

export default ListaOpciones