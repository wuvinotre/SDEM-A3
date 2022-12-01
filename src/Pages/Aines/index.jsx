import { useContext } from "react";
import Content from "../../Components/Content";
import Context from "../../context/context";

const Aines = () => {
  const [state] = useContext(Context);

  return <Content data={state.aines} />;
};

export default Aines;
