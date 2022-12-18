import { ReactElement } from "react";
import clsx from "clsx";
import ArrowRight from "../../../shared/assets/icons/ArrowRight";

const SectionHeader = ({
  header,
  onClick,
  open,
  children,
}: {
  children: ReactElement;
  onClick: () => void;
  open: boolean;
  header: string;
}) => {
  const buttonClass = () => {
    return clsx(
      "w-full flex justify-between text-xl font-fontBold px-4 py-1 bg-slate-200 items-center",
      { "rounded-tl-md rounded-tr-md": open },
      { "rounded-md": !open }
    );
  };

  const iconClass = () => {
    return clsx(
      "transition-all duration-300",
      { "rotate-90": open },
      { "rotate-0": !open }
    );
  };

  return (
    <div className="flex flex-col w-full rounded-md">
      <button className={buttonClass()} onClick={onClick}>
        <p className="md:text-xl font-fontBold text-lg whitespace-nowrap ">
          {header}:
        </p>
        <div className={iconClass()}>
          <ArrowRight />
        </div>
      </button>
      {children}
    </div>
  );
};

export default SectionHeader;
