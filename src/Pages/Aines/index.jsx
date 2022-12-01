// Json
import Data from "../../Mock/aines";

// Components
import Content from "../../Components/Content";
import Head from "../../Components/Head";

const Aines = () => {
  return (
    <>
      <Head title="AINEs" description="Lista de AINEs" />
      <Content data={Data} />
    </>
  );
};

export default Aines;
