import "./MiOrg.css"

const MiOrg = (props) =>{
    return <section className="org-section">
        <h3 className="titulo">Mi Organización</h3>
        <img src="/img/iconBtn.png" alt="Icon-Btn" onClick={props.actualizarMostrar} />
    </section>
}

export default MiOrg;
