import { ImageSection, TextSection } from "./components"

export default function Error() {
  return (
    <main className="w-screen flex h-screen items-center justify-center bg-third-bg bg-cover bg-no-repeat px-4">
      <div className="md:h-[600px] flex flex-col-reverse xl:flex-row xl:gap-10 gap-4 xl:justify-between shadow-lg rounded bg-white xl:py-4 py-10 px-14 esm:px-10 items-center">
        <TextSection />
        <ImageSection />
      </div>
    </main>
  )
}
