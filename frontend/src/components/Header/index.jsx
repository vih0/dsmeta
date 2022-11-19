import './style.css';
import Logo from '../../assets/logo.svg'
function Header() {
  return (
    <div>
      <header>
        <div class="dsmeta-logo-container">
          <img src={Logo} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por <br/>
            <a href="https://www.linkedin.com/in/vitoria-araujo-635ab81b4">
               Vitória Araújo
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}
export default Header;
