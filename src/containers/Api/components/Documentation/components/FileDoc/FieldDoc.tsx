import React, { useState } from "react";
import DataHeader from "./DataHeader";
import ParametersData from "./ParametersData";
import QueryContainer from "./QueryContainer";
import SectionHeader from "./SectionHeader";
import { v4 as uuid } from "uuid";
import {
  ApiField,
  ApiFieldData,
} from "../../../../../../shared/interfaces/api.interface";

const FieldDoc = ({ fieldData }: { fieldData: ApiField }) => {
  return (
    <div className="flex flex-col w-full">
      {fieldData.fields.map((f) => (
        <FieldDataCard key={uuid()} f={f} />
      ))}
    </div>
  );
};

const FieldDataCard = ({ f }: { f: ApiFieldData }) => {
  const [openEndpoint, setOpenEndpoint] = useState(false);
  const [openParams, setOpenParams] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex-col py-5 flex gap-3">
        <div className="flex flex-col gap-1">
          <DataHeader name={f.name} route={f.route} />
          <div className="mt-2 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            facilis doloribus corporis incidunt? Ut eaque vel nobis doloremque
            fugit sint.
          </div>
        </div>

        {f.arguments.length > 0 && (
          <ParametersData
            args={f.arguments}
            openParams={openParams}
            onClick={() => setOpenParams(!openParams)}
          />
        )}

        <SectionHeader
          header={"Test Endpoint"}
          open={openEndpoint}
          onClick={() => setOpenEndpoint(!openEndpoint)}
        >
          {openEndpoint ? <QueryContainer field={f} /> : <></>}
        </SectionHeader>
      </div>

      <div className={"w-full border-t-[2px] border-slate-300"}></div>
    </div>
  );
};

export default FieldDoc;
