import { useContext } from "react";
import Context from "../../context/context";

// Components
import Content from "../../Components/Content";
import Head from "../../Components/Head";

const Corticoides = () => {
    const [state] = useContext(Context);

    return (
        <>
            <Head title="Corticoides" description="Lista de Corticoides" />
            <Content data={state.corticoide} />
        </>
    );
};

export default Corticoides;
