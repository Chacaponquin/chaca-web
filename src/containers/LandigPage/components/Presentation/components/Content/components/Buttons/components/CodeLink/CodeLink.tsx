import { ArrowRight, Copy } from "@modules/app/modules/icon/components"
import { useToast } from "@modules/app/modules/toast/hooks"

export default function CodeLink() {
  const { toastSuccess } = useToast()

  const CODE = "npm install chaca -dev"

  function handleCopy() {
    toastSuccess({ message: "Copied to clipoard" })
    navigator.clipboard.writeText(CODE)
  }

  return (
    <div className="px-6 py-2 border-[1px] border-scale-10 bg-scale-5 stroke-white fill-white rounded flex justify-center items-center">
      <ArrowRight size={25} />

      <p className="font-fontCode ml-3 mr-7">{CODE}</p>

      <button className="transition-all duration-200 hover:scale-105" onClick={handleCopy}>
        <Copy size={22} />
      </button>
    </div>
  )
}
