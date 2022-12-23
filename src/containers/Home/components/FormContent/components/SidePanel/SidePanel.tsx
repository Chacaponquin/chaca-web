import { useContext } from "react";
import { AppConfigContext } from "../../../../../../shared/context/AppConfigContext";
import { X } from "../../../../../../shared/assets/icons";
import clsx from "clsx";

const SidePanel = ({
  docsOpen,
  handleCloseDocs,
}: {
  docsOpen: boolean;
  handleCloseDocs: () => void;
}) => {
  const { schemas } = useContext(AppConfigContext);

  const sectionClass = () => {
    return clsx(
      "flex h-full bg-white transition-all duration-300 flex-col px-3 py-3 border-l-2",
      { "w-[30%]": docsOpen },
      { "w-[0%]": !docsOpen }
    );
  };

  return (
    <div className={sectionClass()}>
      <div className="flex justify-end w-full">
        <button onClick={handleCloseDocs}>
          <X size={20} />
        </button>
      </div>

      {schemas.map((el) => (
        <div key={el.id}>{}</div>
      ))}
    </div>
  );
};

export default SidePanel;
