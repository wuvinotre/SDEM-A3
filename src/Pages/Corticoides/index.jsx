import { useContext } from "react";
import Content from "../../Components/Content";
import Context from "../../context/context";

const Corticoides = () => {
  const [state] = useContext(Context);

  return (
    <div>
      <Content data={state.corticoide} />
    </div>
  );
};

export default Corticoides;
