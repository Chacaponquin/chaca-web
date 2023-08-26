import { PanInfo } from "framer-motion"

interface UsePressProps {
  handleUpdateLines: () => void
}

export default function usePress({ handleUpdateLines }: UsePressProps) {
  function onDrangEnd(_: MouseEvent, info: PanInfo) {
    handleUpdateLines()
  }

  return {
    onDrangEnd,
  }
}
