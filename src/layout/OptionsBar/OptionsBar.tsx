import { Code, Home, Schema } from "../../shared/assets/icons";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../shared/routes/app/APP_ROUTES";

const OptionsBar = () => {
  const divClass = ({ isActive }: { isActive: boolean }): string => {
    return clsx(
      "flex flex-col items-center py-1 cursor-pointer rounded-md duration-300 transition-all",
      { "bg-principal-bg fill-white text-white": isActive },
      { "bg-white fill-black text-black hover:bg-slate-100": !isActive }
    );
  };

  const textClass = "text-sm";
  const iconSize = 25;

  return (
    <div className="w-[100px] h-screen bg-white">
      <div className="flex flex-col px-2 py-4 gap-1">
        <NavLink className={divClass} to={APP_ROUTES.HOME}>
          <Home size={iconSize} />
          <p className={textClass}>Home</p>
        </NavLink>

        <NavLink className={divClass} to={"/api"}>
          <Code size={iconSize} />
          <p className={textClass}>Api</p>
        </NavLink>

        <NavLink className={divClass} to={"/mySchemas"}>
          <Schema size={iconSize} />
          <p className={textClass}>Schemas</p>
        </NavLink>
      </div>
    </div>
  );
};

export default OptionsBar;
