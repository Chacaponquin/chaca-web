import { useRef } from "react";
import LoaderContainer from "../../../../shared/components/Loader/LoaderContainer";

const CreationLoadingModal = ({ porcent }: { porcent: number }) => {
  return (
    <div className="w-screen h-screen fixed bg-white/50 top-0 left-0 z-[99] flex justify-center items-center overflow-hidden">
      <div className="px-10 py-10 w-full h-full flex flex-col items-center bg-white justify-center overflow-hidden">
        <LoaderContainer
          className={"w-[200px] esm:w-[120px] mb-10"}
          loading={true}
        />
        <ProgessBar porcent={porcent} />
      </div>
    </div>
  );
};

const ProgessBar = ({ porcent }: { porcent: number }) => {
  const porcentDiv = useRef<HTMLDivElement>(null);

  return (
    <div
      className="max-w-[700px] w-full rounded-full bg-slate-100 h-[17px]"
      ref={porcentDiv}
    >
      <div
        className={
          "absolute rounded-full bg-gradient-to-r from-principalColor to-secondColor h-[17px] transition-all duration-75"
        }
        style={{
          width: `${
            porcentDiv.current
              ? Number((porcentDiv.current.clientWidth! * porcent) / 100)
              : 0
          }px`,
        }}
      ></div>
    </div>
  );
};

export default CreationLoadingModal;
