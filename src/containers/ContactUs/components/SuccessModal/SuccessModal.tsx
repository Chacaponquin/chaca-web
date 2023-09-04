import { Button, Image, Text } from "./components"

export default function SuccessModal() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white/40 ">
      <div
        id="message-success-modal"
        className="py-6 px-20 bg-white shadow-lg rounded-md flex flex-col items-center esm:px-10 max-w-[95%]"
      >
        <Image />
        <Text />
        <Button />
      </div>
    </div>
  )
}
