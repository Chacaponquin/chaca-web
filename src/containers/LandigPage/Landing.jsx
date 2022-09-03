import FirstPage from "./components/FirstPage";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import FAQ from "./components/FAQ";

const Landing = () => {
  return (
    <div className="h-screen landing-page absolute top-0 overflow-x-hidden -z-10">
      <div className="w-screen h-max flex flex-col items-center justify-center ">
        <FirstPage />
        <WhyUs />
        <Services />
        <FAQ />
      </div>
    </div>
  );
};

export default Landing;
