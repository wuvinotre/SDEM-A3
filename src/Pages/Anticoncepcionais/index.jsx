import { useContext } from "react";
import Context from "../../context/context";

// Components
import Content from "../../Components/Content";
import Head from "../../Components/Head";

const Anticoncepcionais = () => {
  const [state] = useContext(Context);

  return (
    <>
      <Head
        title="Anticoncepcionais"
        description="Lista de Anticoncepcionais"
      />
      <Content data={state.anticoncepcionais} />
    </>
  );
};

export default Anticoncepcionais;
