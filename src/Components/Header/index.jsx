import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";
import "./styles.scss";

const Header = () => {
    const [search, setSearch] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [_, dispatch] = useContext(Context);

    const onChange = () => {
        dispatch({ type: "search", search: search });
    };

    let activeStyle = {
        backgroundColor: "#e5e7eb",
    };

    return (
        <div className="header">
            <div className="header-description">
                <h1>Lista de Medicamentos</h1>
                <p>
                    Ciência da Computação & Farmácia - Projeto
                    <a
                        href="https://www.animahub.com.br"
                        target="_blank"
                        rel="noreferrer"
                    >
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
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Corticoides
                        </NavLink>
                    </div>
                    <div className="filter-child">
                        <NavLink
                            to="/antitireoidianos"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Antitireoidianos
                        </NavLink>
                    </div>
                    <div className="filter-child">
                        <NavLink
                            to="/anticoncepcionais"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Anticoncepcionais
                        </NavLink>
                    </div>
                    <div className="filter-child">
                        <NavLink
                            to="/aines"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            AINEs
                        </NavLink>
                    </div>
                </div>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Pesquisar"
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                onChange();
                            }
                        }}
                    />
                    <button type onClick={onChange}>
                        🔎
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
