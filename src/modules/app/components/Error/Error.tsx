import { APP_IMAGES } from "@modules/app/constants"

export default function Error() {
  return (
    <main className="w-screen flex h-screen items-center justify-center bg-third-bg bg-cover bg-no-repeat px-4">
      <div className="md:h-[600px] flex flex-col-reverse xl:flex-row xl:gap-10 gap-4 xl:justify-between shadow-lg rounded bg-white xl:py-4 py-10 px-14 esm:px-10 items-center">
        <div className="flex flex-col max-w-[500px] gap-5 esm:gap-2">
          <h1 className="font-fontTitle text-5xl esm:text-3xl text-center">Something went wrong</h1>

          <p className="text-slate-500 text-lg esm:text-base text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis accusamus quisquam ipsum
            id corrupti, illum placeat natus veniam autem assumenda adipisci culpa magnam.
          </p>
        </div>

        <div>
          <img
            src={APP_IMAGES.ERROR.image}
            alt={APP_IMAGES.ERROR.alt}
            className="md:w-[500px] w-[450px] object-cover esm:w-[350px] min-w-[270px]"
          />
        </div>
      </div>
    </main>
  )
}
