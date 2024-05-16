import React from "react";
import Header from "./components/Header";
import HeroBody from "./components/HeroBody";
import { HeroContextProvider } from "./context/index";

const App = () => {
  return (
    <div className="bg-white">
      <HeroContextProvider>
        <Header />
      </HeroContextProvider>
      <HeroBody />
    </div>
  );
};

export default App;
