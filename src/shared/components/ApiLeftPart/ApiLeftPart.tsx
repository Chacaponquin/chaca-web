import SearchSection from "./components/SearchSection";
import SectionParentDiv from "./components/SectionParentDiv";

const ApiLeftPart = () => {
  return (
    <div className="flex w-full flex-col pt-4 h-full">
      <SearchSection />

      <div className="flex flex-col w-full py-2 gap-7">
        <SectionParentDiv text={"Empezando"} />
        <SectionParentDiv text={"Herramienta"} />
        <SectionParentDiv text={"Fields"} />
      </div>
    </div>
  );
};

export default ApiLeftPart;
