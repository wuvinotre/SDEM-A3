import { createContext } from "react";

import aines from "../Mock/aines.json";
import anticoncepcionais from "../Mock/anticoncepcionais.json";
import antitireoidianos from "../Mock/antitireoidianos.json";
import corticoide from "../Mock/corticoides.json";

export const initialState = {
  aines: aines,
  anticoncepcionais: anticoncepcionais,
  antitireoidianos: antitireoidianos,
  corticoide: corticoide,
};

const filterByComposition = (search) => (item) => {
  return item.composition.toLowerCase().includes(search.toLowerCase().trim());
};

const filterByName = (search) => (item) => {
  return item.name.toLowerCase().includes(search.toLowerCase().trim());
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "search":
      return {
        ...state,
        aines:
          action.search === null
            ? aines
            : aines.filter(filterByComposition(action.search)),
        anticoncepcionais:
          action.search === null
            ? anticoncepcionais
            : anticoncepcionais.filter(filterByComposition(action.search)),
        antitireoidianos:
          action.search === null
            ? antitireoidianos
            : antitireoidianos.filter(filterByName(action.search)),
        corticoide:
          action.search === null
            ? corticoide
            : corticoide.filter(filterByName(action.search)),
      };
    default:
      return state;
  }
};

const Context = createContext(initialState);

export default Context;
