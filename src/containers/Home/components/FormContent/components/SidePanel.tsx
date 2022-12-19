import { useContext } from "react";
import { AppConfigContext } from "../../../../../shared/context/AppConfigContext";
import { v4 as uuid } from "uuid";
import { X } from "../../../../../shared/assets/icons";

const SidePanel = () => {
  const { schemas } = useContext(AppConfigContext);

  return (
    <div className="flex w-[30%] h-full bg-white transition-all duration-300 flex-col px-3 py-3">
      <div className="flex justify-end">
        <X size={20} />
      </div>

      {schemas.map((el, i) => (
        <div>{}</div>
      ))}
    </div>
  );
};

export default SidePanel;
