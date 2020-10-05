import React from "react";
import { Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" render={(rp) => <Home {...rp} />} />
        <Route exact path="/other" render={(rp) => <Other {...rp} />} />
        <Route exact path="/another" render={(rp) => <Another {...rp} />} />
      </Switch>
      <Footer />
    </GlobalContext.Provider>
  );
};
