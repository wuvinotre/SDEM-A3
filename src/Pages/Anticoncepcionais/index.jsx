import { useContext } from "react";
import Context from "../../context/context";
import Content from "../../Components/Content";

const Anticoncepcionais = () => {
  const [state] = useContext(Context);

  return <Content data={state.anticoncepcionais} />;
};

export default Anticoncepcionais;
