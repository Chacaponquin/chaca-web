import { useState } from "react"
import LoaderContainer from "@modules/shared/components/Loader/LoaderContainer/LoaderContainer"
import { useQuery } from "@modules/shared/hooks"
import MDView from "@modules/shared/components/MDView/MDView"

const GuideContainer = ({ route }: { route: string }) => {
  const [content, setContent] = useState("")

  const { loading, error } = useQuery<string>({
    url: route,
    onCompleted: (data) => {
      setContent(data)
    },
  })

  return (
    <LoaderContainer loading={loading} className='w-[60px] esm:w-[40px]'>
      <MDView content={content} />
    </LoaderContainer>
  )
}

export default GuideContainer
