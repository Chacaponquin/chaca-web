import { Link } from "react-router-dom";
import clsx from "clsx";

const ChacaLinkButton = ({
  route,
  type,
  text,
}: {
  route: string;
  type: "cancel" | "link";
  text: string;
}) => {
  const buttonClass = () => {
    return clsx(
      "px-12 py-3 rounded-full border-4 font-bold flex items-center esm:hidden hover:opacity-70 transition-all duration-300 border-solid w-max",
      { "bg-white text-blaclk": type === "cancel" },
      { "bg-principalColor text-white border-principalColor": type === "link" }
    );
  };

  return (
    <Link className={buttonClass()} to={route}>
      <p className="uppercase text-primary_color text-xl mb-0 text-center esm:text-base">
        {text}
      </p>
    </Link>
  );
};

export default ChacaLinkButton;
