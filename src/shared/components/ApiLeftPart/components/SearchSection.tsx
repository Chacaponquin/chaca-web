import React from "react";
import clsx from "clsx";
import { useState } from "react";
import Search from "../../../assets/icons/Search";

const SearchSection = () => {
  const [focus, setFocus] = useState(false);

  const searchClass = () => {
    return clsx(
      "rounded-md border-2 w-full flex search-input gap-3 items-center px-3 py-1 esm:px-3 esm:py-1",
      { "search-input-focus": focus }
    );
  };

  return (
    <div className="px-2 esm:px-1">
      <div className={searchClass()}>
        <div className="w-max">
          <Search size={20} />
        </div>

        <input
          type="text"
          className="border-none outline-none w-full"
          placeholder="Search..."
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </div>
  );
};

export default SearchSection;
