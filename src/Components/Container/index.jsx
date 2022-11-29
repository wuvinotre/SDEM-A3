import React from "react";
import { Routes, Route } from "react-router-dom";

// Compoenents
import Header from "../Header";

import Corticoides from "../../Pages/Corticoides";
import Antitireoidianos from "../../Pages/Antitireoidianos";
import Aines from "../../Pages/Aines";
import Anticoncepcionais from "../../Pages/Anticoncepcionais";

import ErrorPage from "../../Pages/Error";

const index = () => {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/" element={<Corticoides />} />
        <Route path="antitireoidianos" element={<Antitireoidianos />} />
        <Route path="anticoncepcionais" element={<Anticoncepcionais />} />
        <Route path="aines" element={<Aines />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </section>
  );
};

export default index;
