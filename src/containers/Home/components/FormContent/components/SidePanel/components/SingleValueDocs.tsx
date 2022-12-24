import React from "react";
import {
  Schema,
  SubOption,
} from "../../../../../../../shared/interfaces/options.interface";

const SingleValueDocs = ({
  option,
  parent,
}: {
  option: SubOption;
  parent: Schema;
}) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-sm bg-secondColor px-4 py-1 text-white font-fontBold text-lg w-max">
        {option.name}
      </div>

      <p className="py-3 text-base text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        iusto minima mollitia voluptatum voluptatibus quisquam?
      </p>

      <h1 className="mb-0 font-fontExtraBold text-lg">Test Endpoint</h1>
    </div>
  );
};

export default SingleValueDocs;
