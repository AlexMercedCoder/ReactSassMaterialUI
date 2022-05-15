import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import Home from "./pages/Home";
import Other from "./pages/Other";
import Another from "./pages/Another";

export const GlobalContext = React.createContext(null);

export const App = (props) => {
  //GLOBAL STATE PROVIDED BY GLOBAL CONTEXT
  const [Global, setGlobal] = React.useState({});

  return (
    <GlobalContext.Provider value={{ Global, setGlobal }}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/other" element={<Other />} />
        <Route exact path="/another" element={<Another />} />
      </Routes>
      <Footer />
    </GlobalContext.Provider>
  );
};
