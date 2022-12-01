import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./App.scss";

// Components
import Container from "./Components/Container";
import Custom404 from "./Pages/Error/404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Container />} />
          <Route path="*" element={<Custom404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
