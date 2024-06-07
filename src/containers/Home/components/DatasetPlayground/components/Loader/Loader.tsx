import { Loader as AppLoader } from "@modules/app/components"

export default function Loader() {
  return (
    <div className="px-10 py-10 w-full h-full flex flex-col items-center bg-gray-100 dark:bg-scale-4 justify-center overflow-hidden gap-20">
      <AppLoader size={140} />
    </div>
  )
}
