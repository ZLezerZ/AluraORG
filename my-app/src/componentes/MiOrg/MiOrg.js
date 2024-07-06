import "./MiOrg.css"

const MiOrg = (props) =>{
    
    
    return <section className="orgSeccion">
        <h3 className="titulo">Mi organizacion</h3>
        <picture onClick={props.cambiarMostrar}>
            <img src="../img/add.png" alt="" />
        </picture>
    </section>
}

export default MiOrg;