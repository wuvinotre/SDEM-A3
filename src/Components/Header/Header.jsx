import "../Header/Header.scss";

function Header() {
  return (
    <div className="container">
      <div className="header-description">
        <h1>Lista de Medicamentos</h1>
        <p>Ciência da Computação & Farmácia - Projeto <a href="">Ânima HUB</a>.</p>
      </div>
      <div className="header-filter">
        <div className="filter-box">
          <div className="filter-child all"><p>Todos</p></div>
          <div className="filter-child"><p>Anfetaminas</p></div>
          <div className="filter-child"><p>Anti-inflamatórios</p></div>
          <div className="filter-child"><p>Fitoterápicos</p></div>
        </div>
        <div className="search-box">
          <input type="text"
          placeholder="Pesquisar ⌬"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
