import { ChacaButton } from "@form/components"

interface Props {
  handleClick(): void
  loading: boolean
}

export default function Button({ handleClick, loading }: Props) {
  return (
    <ChacaButton onClick={handleClick} color="primary" size="sm" text="Submit" disabled={loading} />
  )
}
