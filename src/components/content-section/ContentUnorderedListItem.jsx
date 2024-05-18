import React from "react";

const ContentUnorderedListItem = ({ ListIcon, heading, description }) => {
  return (
    <li className="flex gap-x-3">
      <ListIcon
        className="mt-1 h-5 w-5 flex-none text-indigo-600"
        aria-hidden="true"
      />
      <span>
        <strong className="font-semibold text-gray-900">{heading}</strong>{" "}
        {description}
      </span>
    </li>
  );
};

export default ContentUnorderedListItem;
