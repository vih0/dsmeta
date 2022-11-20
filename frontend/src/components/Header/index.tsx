import Logo from '../../assets/logo.svg'
import './style.css'
function Header() {
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={Logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por<br/>
              <a href="https://www.linkedin.com/in/vitoria-araujo-635ab81b4/">Vitória Araújo</a>
            </p>
        </div>
    </header>
    );
}
export default Header;