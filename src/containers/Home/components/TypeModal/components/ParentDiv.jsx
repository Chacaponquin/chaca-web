import React from "react";
import { titlePipe } from "../helpers/titlePipe";

const ParentDiv = ({ parentClass, parent, handleChangeParentSelected }) => {
  return (
    <div
      className={parentClass(parent.id)}
      onClick={() => handleChangeParentSelected(parent)}
    >
      <p className="mb-0 capitalize font-fontBold pointer-events-none">
        {titlePipe(parent.name)}
      </p>
    </div>
  );
};

export default ParentDiv;
