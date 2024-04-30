import { Loader } from "@modules/app/components"
import { SCREEN_SIZES } from "@modules/app/constants"
import { useScreen } from "@modules/shared/hooks"

export default function Loading() {
  const { condition } = useScreen(SCREEN_SIZES.LG)

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Loader size={condition ? 180 : 120} />
    </div>
  )
}
