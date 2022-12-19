import React from "react";
import { ArrowRight, Config } from "../../../../shared/assets/icons";
import DatasetsHeader from "./components/DatasetsHeader";

const FieldsMenu = () => {
  const folders = [
    {
      name: "Buenas",
      subFolders: [
        { name: "Buenas", subFolders: [] },
        { name: "Buenas", subFolders: [] },
        { name: "Buenas", subFolders: [] },
        { name: "Buenas", subFolders: [] },
      ],
    },
    {
      name: "Buenas",
      subFolders: [
        { name: "Buenas", subFolders: [] },
        { name: "Buenas", subFolders: [] },
      ],
    },
    { name: "Buenas", subFolders: [] },
    {
      name: "Buenas",
      subFolders: [
        { name: "Buenas", subFolders: [] },
        { name: "Buenas", subFolders: [] },
      ],
    },
  ];

  return (
    <div className="h-screen w-[300px] bg-white px-2">
      <DatasetsHeader />

      <div className="h-full bg-white w-full flex flex-col">
        {folders.map((el, i) => (
          <div className="flex flex-col" key={i}>
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center">
                <ArrowRight size={20} />
                <p className="ml-2">{el.name}</p>
              </div>

              <div className="">
                <Config size={18} />
              </div>
            </div>

            <div className="flex flex-col">
              {el.subFolders.map((e, f) => (
                <div className="flex py-1 items-center">
                  <ArrowRight size={20} />
                  <p className="ml-2">{el.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FieldsMenu;
