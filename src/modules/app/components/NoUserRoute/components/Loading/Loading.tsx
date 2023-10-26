import { Loader } from "@modules/app/components"

export default function Loading() {
  return (
    <main className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-darkColor flex justify-center items-center">
      <Loader size={120} />
    </main>
  )
}
