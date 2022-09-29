import Documentation from "./components/Documentation/Documentation";
import "./api.css";
import ApiLeftPart from "../../shared/components/ApiLeftPart/ApiLeftPart";

const Api = () => {
  return (
    <div className="w-full flex -translate-y-8 border-b-2">
      <div className="w-[250px] min-w-[200px] lg:block hidden">
        <ApiLeftPart />
      </div>

      <div className="w-full flex lg:border-l-2 esm:px-7 px-12 lg:px-20 py-5">
        <Documentation />
      </div>
    </div>
  );
};

export default Api;
