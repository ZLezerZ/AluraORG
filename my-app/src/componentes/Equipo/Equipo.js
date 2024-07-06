import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {
  //Para evitar tener que estar escribiendo constantemente props.datos. algo, utilizamos la técnica de Destructuración:
  const { colorPrimario,titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, manejarLike } = props;
  const objetoColor = {
    backgroundColor: hexToRgba(colorPrimario, 0.6)
  };
  const estiloTitulo = {
    borderColor: colorPrimario,
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={objetoColor}>
          <input
            type="color"
            className="input__color"
            value={colorPrimario}
            onChange={(evento)=>{actualizarColor(evento.target.value, id)}} //Este onChange nos quita  un error de la consola al utilizar la propiedad value. 
          />

          <h3 className="equipo__titulo" 
          style={estiloTitulo}>
            {titulo}
          </h3>

          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                manejarLike={manejarLike}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default Equipo;
