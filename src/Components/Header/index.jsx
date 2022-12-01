import "./styles.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    backgroundColor: "#e5e7eb",
  };

  return (
    <div className="container">
      <div className="header-description">
        <h1>Lista de Medicamentos</h1>
        <p>
          Ciência da Computação & Farmácia - Projeto{" "}
          <a href="https://www.animahub.com.br" target="_blank">
            Ânima HUB
          </a>
          .
        </p>
      </div>
      <div className="header-filter">
        <div className="filter-box">
          <div className="filter-child all">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Corticoides
            </NavLink>
          </div>
          <div className="filter-child">
            <NavLink
              to="/antitireoidianos"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Antitireoidianos
            </NavLink>
          </div>
          <div className="filter-child">
            <NavLink
              to="/anticoncepcionais"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Anticoncepcionais
            </NavLink>
          </div>
          <div className="filter-child">
            <NavLink
              to="/aines"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              AINEs
            </NavLink>
          </div>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Pesquisar ⌬" />
        </div>
      </div>
    </div>
  );
};

export default Header;
