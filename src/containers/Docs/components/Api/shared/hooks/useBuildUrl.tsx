import { useEnv } from "@modules/app/modules/env/hooks"

interface Props {
  route: string
}

export default function useBuildUrl({ route }: Props) {
  const { API_ROUTE } = useEnv()

  const url = `${API_ROUTE}/api/v1/${route}`

  return { url }
}
