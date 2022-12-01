import { useContext } from "react";
import Context from "../../context/context";

// Components
import Content from "../../Components/Content";
import Head from "../../Components/Head";

const Antitireoidianos = () => {
  const [state] = useContext(Context);

  return (
    <>
      <Head title="Antitireoidianos" description="Lista de Antitireoidianos" />
      <Content data={state.antitireoidianos} />
    </>
  );
};

export default Antitireoidianos;
