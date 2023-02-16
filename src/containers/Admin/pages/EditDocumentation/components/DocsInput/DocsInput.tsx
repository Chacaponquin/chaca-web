import { useRef, useState } from "react"
import { PlayGroundMode } from "../../interfaces/playgroundMode.type"
import { DocsInputHeader, EditPlayground, PreviewPlayground } from "./components"

export default function DocsInput({
  handleChangeContent,
  content,
  handleUploadImage,
  loading,
}: {
  handleChangeContent: (value: string) => void
  content: string
  handleUploadImage: (file: File) => void
  loading: boolean
}) {
  const fileInputRef = useRef<null | HTMLInputElement>(null)

  const [playgroundMode, setPlaygroundMode] = useState<PlayGroundMode>("edit")

  const handleChange = (value: string) => {
    handleChangeContent(value)
  }

  const handleChangePlaygroundMode = (mode: PlayGroundMode) => {
    setPlaygroundMode(mode)
  }

  const handleClickInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className='flex flex-col w-full'>
      <DocsInputHeader
        handleChangePlaygroundMode={handleChangePlaygroundMode}
        handleClickInput={handleClickInput}
        playgroundMode={playgroundMode}
      />

      {playgroundMode === "edit" && (
        <EditPlayground
          content={content}
          handleChange={handleChange}
          handleUploadImage={handleUploadImage}
          loading={loading}
          fileInputRef={fileInputRef}
        />
      )}
      {playgroundMode === "preview" && <PreviewPlayground content={content} />}
    </div>
  )
}
