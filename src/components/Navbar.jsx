import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-personalizado">
      <div className="container-fluid">

        <a className="navbar-brand" href="#inicio">
          Mi primera App
        </a>

        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#inicio">
            Inicio
          </a>

          <a className="nav-link" href="#servicios">
            Servicios
          </a>

          <a className="nav-link" href="#contacto">
            Contacto
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;