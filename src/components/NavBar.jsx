import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="logo">
          <img src="/src/assets/img/eminem logo.png" width="60" alt="eminemlogo" />
        </div>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link" href="#">Hombre</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" href="#">Mujer</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" href="#">Accesorios</button>
            </li>
          </ul>
        </div>
        
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar
