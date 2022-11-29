import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./App.scss";

// Components
import Container from "./Components/Container";
import ErrorPage from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Container />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
