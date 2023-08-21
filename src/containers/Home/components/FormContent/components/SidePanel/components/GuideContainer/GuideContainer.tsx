import { useState } from "react"
import { LoaderContainer } from "@modules/app/components/Loader"
import { useQuery } from "@modules/app/modules/http/hooks"
import { MDView } from "@modules/shared/modules/markdown/components"

const GuideContainer = ({ route }: { route: string }) => {
  const [content, setContent] = useState("")

  const { loading } = useQuery<string>({
    url: route,
    onCompleted: (data) => {
      setContent(data)
    },
  })

  return (
    <LoaderContainer
      loading={loading}
      size={50}
      className='w-full py-20 flex justify-center items-center'
    >
      <MDView content={content} />
    </LoaderContainer>
  )
}

export default GuideContainer
