// Json
import Data from "../../Mock/corticoides.json";

// Components
import Content from "../../Components/Content";
import Head from "../../Components/Head";

const Corticoides = () => {
  return (
    <>
      <Head title="Corticoides" description="Lista de Corticoides" />
      <Content data={Data} />
    </>
  );
};

export default Corticoides;
