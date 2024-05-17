import React, { createContext, useContext, useState } from "react";

const HeroContext = createContext();
const useHero = () => useContext(HeroContext);

const HeroContextProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];

  return (
    <HeroContext.Provider
      value={{ navigation, setMobileMenuOpen, mobileMenuOpen }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export { useHero, HeroContextProvider };
