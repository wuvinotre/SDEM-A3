import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// CSS
import "./styles.scss";

// Hooks
import useMedia from "../../Hooks/useMedia";

const Content = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const mobile = useMedia("(max-width: 53.125rem)");
  const location = useLocation();

  useEffect(() => {
    setLoading(false);
  }, [mobile]);

  if (loading)
    return (
      <div className="card">
        <p>Carregando...</p>
      </div>
    );

  if (mobile) {
    switch (location.pathname) {
      case "/antitireoidianos":
        return (
          <>
            {data.map((item) => (
              <div key={item.id} className="card">
                <h2>Nome</h2>
                <p>{item.name}</p>
                <h2>Interação com</h2>
                <p>{item.nameInteraction}</p>
                <h2>Tipo de Interação</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </>
        );
      case "/anticoncepcionais":
        return (
          <>
            {data.map((item) => (
              <div key={item.id} className="card">
                <h2>Composição</h2>
                <p>{item.composition}</p>
                <h2>Interação com</h2>
                <p>{item.InteractionWith}</p>
                <h2>Interação no</h2>
                <p>{item.interactionIn}</p>
                <h2>Tipo de interação</h2>
                <p>{item.interactionType}</p>
              </div>
            ))}
          </>
        );
      case "/aines":
        return (
          <>
            {data.map((item) => (
              <div key={item.id} className="card">
                <h2>Composição</h2>
                <p>{item.composition}</p>
                <h2>Interação com</h2>
                <p>{item.InteractionWith}</p>
                <h2>Tipo de interação</h2>
                <p>{item.interactionType}</p>
              </div>
            ))}
          </>
        );
      default:
        return (
          <>
            {data.map((item) => (
              <div key={item.name} className="card">
                <h2>Nome</h2>
                <p>{item.name}</p>
                <h2>Pra que serve</h2>
                <p>{item.symptoms}</p>
                <h2>Como usar</h2>
                <p>{item.instruction}</p>
              </div>
            ))}
          </>
        );
    }
  }

  switch (location.pathname) {
    case "/antitireoidianos":
      return (
        <div className="main-container">
          <table>
            <thead>
              <tr>
                <td id="left">
                  <h2>Nome</h2>
                </td>
                <td id="center">
                  <h2>Interação com</h2>
                </td>
                <td id="right">
                  <h2>Tipo de Interação</h2>
                </td>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <h2>{item.name}</h2>
                  </td>
                  <td>
                    <p>{item.nameInteraction}</p>
                  </td>
                  <td>
                    <p>{item.description}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "/anticoncepcionais":
      return (
        <div className="main-container">
          <table>
            <thead>
              <tr>
                <td id="left">
                  <h2>Composição</h2>
                </td>
                <td id="center">
                  <h2>Interação com</h2>
                </td>
                <td id="right">
                  <h2>Interação no</h2>
                </td>
                <td id="right">
                  <h2>Tipo de interação</h2>
                </td>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <h2>{item.composition}</h2>
                  </td>
                  <td>
                    <p>{item.InteractionWith}</p>
                  </td>
                  <td>
                    <p>{item.interactionIn}</p>
                  </td>
                  <td>
                    <p>{item.interactionType}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "/aines":
      return (
        <div className="main-container">
          <table>
            <thead>
              <tr>
                <td id="left">
                  <h2>Composição</h2>
                </td>
                <td id="center">
                  <h2>Interação com</h2>
                </td>
                <td id="right">
                  <h2>Tipo de interação</h2>
                </td>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <h2>{item.composition}</h2>
                  </td>
                  <td>
                    <p>{item.InteractionWith}</p>
                  </td>
                  <td>
                    <p>{item.interactionType}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return (
        <div className="main-container">
          <table>
            <thead>
              <tr>
                <td id="left">
                  <h2>Nome</h2>
                </td>
                <td id="center">
                  <h2>Pra que serve</h2>
                </td>
                <td id="right">
                  <h2>Como usar</h2>
                </td>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.name}>
                  <td>
                    <h2>{item.name}</h2>
                  </td>
                  <td>
                    <p>{item.symptoms}</p>
                  </td>
                  <td>
                    <p>{item.instruction}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
};

export default Content;
