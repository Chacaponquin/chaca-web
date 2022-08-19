import React from "react";
import Icon from "supercons";
import clsx from "clsx";
import { useState } from "react";

const SearchSection = () => {
  const [focus, setFocus] = useState(false);

  const searchClass = () => {
    return clsx(
      "rounded-md border-2 w-full flex search-input gap-3 items-center px-5 py-2 esm:px-3 esm:py-1",
      { "search-input-focus": focus }
    );
  };

  return (
    <div className="px-4 esm:px-1">
      <div className={searchClass()}>
        <Icon glyph="search" />
        <input
          type="text"
          className="border-none outline-none"
          placeholder="Search..."
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </div>
  );
};

export default SearchSection;
