import { useContext } from "react";
import Context from "../../context/context";

// Components
import Content from "../../Components/Content";
import Head from "../../Components/Head";

const Aines = () => {
  const [state] = useContext(Context);

  return (
    <>
      <Head title="AINEs" description="Lista de AINEs" />
      <Content data={state.aines} />
    </>
  );
};

export default Aines;
