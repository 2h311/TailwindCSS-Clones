import React from "react";
import { list } from "../../data";
import { ContentUnorderedListItem } from "./";

const ContentUnorderedList = () => {
  return (
    <ul role="list" className="mt-8 space-y-8 text-gray-600">
      {list.map((item, index) => (
        <ContentUnorderedListItem key={index} {...item} />
      ))}
    </ul>
  );
};

export default ContentUnorderedList;
