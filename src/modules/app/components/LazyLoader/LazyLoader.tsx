import Loader from "../Loader/Loader"

export default function LazyLoader() {
  return (
    <div className="flex w-full min-h-screen px-8 py-4 justify-center items-center bg-scale-5">
      <Loader size={140} />
    </div>
  )
}
