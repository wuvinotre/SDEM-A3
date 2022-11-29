import { useLocation } from "react-router-dom";

// CSS
import "./styles.scss";
const Content = ({ data }) => {
  const location = useLocation();

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
