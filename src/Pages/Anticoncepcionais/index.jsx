// Json
import Data from "../../Mock/anticoncepcionais";

// Components
import Content from "../../Components/Content";
import Head from "../../Components/Head";

const Anticoncepcionais = () => {
  return (
    <>
      <Head
        title="Anticoncepcionais"
        description="Lista de Anticoncepcionais"
      />
      <Content data={Data} />
    </>
  );
};

export default Anticoncepcionais;
