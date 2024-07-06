import "./Colaborador.css";
import { MdDeleteForever } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Colaborador = (props) => {
  const {nombre, puesto, foto, id, fav } = props.datos
  const{colorPrimario, eliminarColaborador, manejarLike} = props

  return (
    <div className="colaborador">
      <MdDeleteForever onClick={()=>eliminarColaborador(id)} className="eliminar"/>
      <picture className="encabezado" style={{backgroundColor: colorPrimario}}>
        <img src={foto} alt={nombre} />
      </picture>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        <div className="favorito">
        {fav === true ? <FaHeart color="red" onClick={() => {manejarLike(id)}}/> : <FaRegHeart onClick={() => {manejarLike(id)}}/> }
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
