import React, { createContext, useContext, useState } from "react";
import { navigation } from "../data";

const HeroContext = createContext();
const useHero = () => useContext(HeroContext);

const HeroContextProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HeroContext.Provider
      value={{ navigation, setMobileMenuOpen, mobileMenuOpen }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export { useHero, HeroContextProvider };
