import React from "react";
import { ArrowRight } from "../../../../shared/assets/icons";

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
    <div className="h-screen w-[300px] bg-gray-600">
      <div className="py-5 w-full bg-red-100"></div>

      <div className="h-full bg-blue-300 w-full flex flex-col pl-2">
        {folders.map((el, i) => (
          <div className="py-1 flex flex-col" key={i}>
            <div className="flex items-center">
              <ArrowRight size={20} />
              <p className="ml-2">{el.name}</p>
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
