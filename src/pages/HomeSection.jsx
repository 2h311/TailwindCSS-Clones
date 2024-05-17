import React from "react";
import { Header, HeroBody } from "../components/home-section";
import { HeroContextProvider } from "../context/homesection";

const HomeSection = () => {
  return (
    <div className="bg-white">
      <HeroContextProvider>
        <Header />
      </HeroContextProvider>
      <HeroBody />
    </div>
  );
};

export default HomeSection;
