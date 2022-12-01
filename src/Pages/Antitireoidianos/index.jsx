// Json
import Data from "../../Mock/antitireoidianos";

// Components
import Content from "../../Components/Content";
import Head from "../../Components/Head";

const Antitireoidianos = () => {
  return (
    <>
      <Head title="Antitireoidianos" description="Lista de Antitireoidianos" />
      <Content data={Data} />
    </>
  );
};

export default Antitireoidianos;
