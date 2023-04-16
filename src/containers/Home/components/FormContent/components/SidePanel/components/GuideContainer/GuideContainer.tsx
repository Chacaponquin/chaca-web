import { useState } from "react"
import LoaderContainer from "@modules/shared/components/Loader/LoaderContainer/LoaderContainer"
import { useQuery } from "@modules/shared/modules/http/hooks"
import MDView from "@modules/shared/modules/markdown/components/MDView/MDView"

const GuideContainer = ({ route }: { route: string }) => {
  const [content, setContent] = useState("")

  const { loading } = useQuery<string>({
    url: route,
    onCompleted: (data) => {
      setContent(data)
    },
  })

  return (
    <LoaderContainer loading={loading} size={50}>
      <MDView content={content} />
    </LoaderContainer>
  )
}

export default GuideContainer
