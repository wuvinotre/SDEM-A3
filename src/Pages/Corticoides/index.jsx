import Content from "../../Components/Content";
import Data from "../../Mock/corticoides.json";

const Corticoides = () => {
  return (
    <div>
      <Content data={Data}/>
    </div>
  );
};

export default Corticoides;
