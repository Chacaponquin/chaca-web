import { File } from "../../../../../../../shared/assets/icons";

const SidePanelHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between w-full mb-3">
      <div className="flex items-center gap-3">
        <div className="flex justify-center items-center w-[45px] h-[35px] rounded bg-slate-200">
          <File size={22} />
        </div>

        <p className="mb-0 font-fontExtraBold text-lg">{title}</p>
      </div>
    </div>
  );
};

export default SidePanelHeader;
