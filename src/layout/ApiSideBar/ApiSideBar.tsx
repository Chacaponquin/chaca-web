import clsx from "clsx";
import X from "../../shared/assets/icons/X";
import ApiLeftPart from "../../shared/components/ApiLeftPart/ApiLeftPart";

const ApiSideBar = ({
  handleCloseSideBar,
  openApiSideBar,
}: {
  openApiSideBar: boolean;
  handleCloseSideBar: () => void;
}) => {
  const sideBarClass = () => {
    return clsx(
      "w-[250px] esm:w-[220px] flex flex-col bg-white h-screen overflow-y-auto py-5 px-3 duration-300 transition-all esm:px-2 exsm:w-screen",
      {
        "-translate-x-full": !openApiSideBar,
      },
      { "translate-x-0": openApiSideBar }
    );
  };

  const containerClass = () => {
    return clsx(
      "w-screen h-screen fixed top-0 left-0 transition-all duration-300 ",
      { "-z-10 bg-transparent": !openApiSideBar },
      { "z-50 bg-black/50": openApiSideBar }
    );
  };

  return (
    <div className={containerClass()}>
      <div className={sideBarClass()}>
        <div className="w-full flex justify-end">
          <button onClick={handleCloseSideBar}>
            <X size={20} />
          </button>
        </div>
        <ApiLeftPart />
      </div>
    </div>
  );
};

export default ApiSideBar;
