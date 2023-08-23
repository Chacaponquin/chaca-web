import { LoaderContainer } from "@modules/app/components/Loader"
import ProgessBar from "./components/ProgessBar/ProgressBar"

const CreationLoadingModal = () => {
  return (
    <div className="w-screen h-screen fixed bg-white/50 top-0 left-0 z-[99] flex justify-center items-center overflow-hidden">
      <div className="px-10 py-10 w-full h-full flex flex-col items-center bg-white justify-center overflow-hidden">
        <LoaderContainer size={200} loading={true} />
        <ProgessBar />
      </div>
    </div>
  )
}

export default CreationLoadingModal
