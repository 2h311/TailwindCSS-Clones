import React, { Fragment } from "react";
import { useHero } from "../context/index";
import NavigationLink from "./NavigationLink";

const Navigation = ({ className }) => {
  const { navigation } = useHero();
  return (
    <Fragment>
      {navigation.map((item) => (
        <NavigationLink key={item.name} {...item} className={className} />
      ))}
    </Fragment>
  );
};

export default Navigation;
