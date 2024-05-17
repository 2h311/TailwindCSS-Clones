import React from "react";

const Person = ({ name, imageUrl, role }) => {
  return (
    <li key={name}>
      <div className="flex items-center gap-x-6">
        <img className="h-16 w-16 rounded-full" src={imageUrl} alt={role} />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {name}
          </h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            {role}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Person;
