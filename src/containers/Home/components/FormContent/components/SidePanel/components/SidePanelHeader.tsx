import { X, File } from "../../../../../../../shared/assets/icons";

const SidePanelHeader = ({
  title,
  handleCloseDocs,
}: {
  title: string;
  handleCloseDocs: () => void;
}) => {
  return (
    <div className="flex justify-between w-full mb-3">
      <div className="flex items-center gap-3">
        <div className="flex justify-center items-center w-[45px] h-[35px] rounded bg-slate-200">
          <File size={22} />
        </div>

        <p className="mb-0 font-fontExtraBold text-lg">{title}</p>
      </div>

      <button onClick={handleCloseDocs}>
        <X size={20} />
      </button>
    </div>
  );
};

export default SidePanelHeader;
