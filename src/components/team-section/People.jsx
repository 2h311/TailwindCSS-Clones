import React from "react";
import { people } from "../../data";
import Person from "./Person";

const People = () => {
  return (
    <ul
      role="list"
      className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
    >
      {people.map((person) => (
        <Person key={person.name} {...person} />
      ))}
    </ul>
  );
};

export default People;
