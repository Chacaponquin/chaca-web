interface UsePressProps {
  handleUpdateLines: () => void
}

export default function usePress({ handleUpdateLines }: UsePressProps) {
  function onDrangEnd() {
    handleUpdateLines()
  }

  return {
    onDrangEnd,
  }
}
