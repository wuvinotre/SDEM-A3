import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context, { initialState, reducer } from "./context/context";

// CSS
import "./App.scss";

// Components
import Container from "./Components/Container";
import ErrorPage from "./Pages/Error";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Container />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}
export default App;
