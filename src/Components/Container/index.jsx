import React from "react";
import { Routes, Route } from "react-router-dom";

// Compoenents
import Header from "../Header";

import Corticoides from "../../Pages/Corticoides";
import Antitireoidianos from "../../Pages/Antitireoidianos";
import Aines from "../../Pages/Aines";
import Anticoncepcionais from "../../Pages/Anticoncepcionais";

import Custom404 from "../../Pages/Error/404";

const index = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Corticoides />} />
        <Route path="antitireoidianos" element={<Antitireoidianos />} />
        <Route path="anticoncepcionais" element={<Anticoncepcionais />} />
        <Route path="aines" element={<Aines />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </>
  );
};

export default index;
