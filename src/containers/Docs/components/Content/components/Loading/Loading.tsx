import { LoaderContainer } from "@modules/app/components/Loader"
import { useScreen } from "@modules/shared/hooks"

interface Props {
  loading: boolean
}

export default function Loading({ loading }: Props) {
  const { bigScreen } = useScreen(1000)

  return (
    <div className="flex justify-center items-center w-full h-full">
      <LoaderContainer size={bigScreen ? 180 : 120} loading={loading} />
    </div>
  )
}
