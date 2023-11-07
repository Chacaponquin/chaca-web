import { ArrowRight, Copy } from "@modules/app/modules/icon/components"

export default function CodeLink() {
  const CODE = "npm install chaca -dev"

  return (
    <div className="px-6 py-2 border-[1px] border-scale-10 bg-scale-5 stroke-white fill-white rounded flex justify-center items-center">
      <ArrowRight size={25} />

      <p className="font-fontCode ml-3 mr-7">{CODE}</p>

      <button>
        <Copy size={22} />
      </button>
    </div>
  )
}
