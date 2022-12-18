import React from "react";
import { X, Config } from "../../../../shared/assets/icons";
import { RadioButton } from "primereact/radiobutton";

const FormContent = () => {
  const sections = ["Single Value", "Ref", "Custom"];

  return (
    <div className="flex flex-col w-full h-screen bg-red-500">
      <div className="flex w-full bg-white py-8"></div>

      <div className="h-full w-full flex">
        <div className="flex w-[70%] h-full flex-col bg-purple-400">
          <div className="bg-white flex w-full py-2 h-max justify-center gap-5 border-2">
            {sections.map((el, i) => (
              <div
                key={i}
                className="px-7 py-2 rounded-full text-white font-fontBold uppercase bg-principal-bg"
              >
                {el}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1 px-3 py-2">
            {[1, 2, 3].map((el, i) => (
              <div
                className="py-3 px-4 bg-principal-bg w-full rounded-md flex items-center justify-between"
                key={i}
              >
                <div className="flex text-white items-center">
                  <RadioButton />
                  <p className="text-lg ml-4">Buenas</p>
                </div>

                <div className="fill-white cursor-pointer">
                  <Config size={25} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-[30%] h-full bg-orange-600 transition-all duration-300">
          <div className="flex w-full py-5 justify-end px-3">
            <X size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContent;
