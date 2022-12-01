import { useContext } from "react";
import Context from "../../context/context";
import Content from "../../Components/Content";

const Antitireoidianos = () => {
  const [state] = useContext(Context);

  return <Content data={state.antitireoidianos} />;
};

export default Antitireoidianos;
