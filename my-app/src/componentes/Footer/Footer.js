import "./Footer.css"

const Footer= () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}> {/*Se coloca la propiedad backgroundImage en el js porque la ruta con el /img ya sabe que tiene que ir a la carpeta public, en cambio en el css no sabría donde buscarla*/}
        <div className="redes">
            <a href="https://www.aluracursos.com/">
            <img src="/img/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.aluracursos.com/">
            <img src="/img/twitter.png" alt="twitter" />
            </a>
            <a href="https://www.aluracursos.com/">
            <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>
        <picture><img src="/img/Logo.png" alt="org" /></picture>
        <p><strong>Desarrollado por Esteban Zermoglio</strong></p>
    </footer>
} 

export default Footer;