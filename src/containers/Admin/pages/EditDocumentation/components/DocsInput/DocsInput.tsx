import { ChacaSimpleButton } from "@modules/shared/components/ChacaButton"
import CodeEditor from "@modules/shared/components/CodeEditor/CodeEditor"
import { usePost } from "@modules/shared/hooks"
import { API_ROUTES } from "@modules/shared/routes"
import React, { useRef } from "react"

export default function DocsInput({
  handleChangeContent,
  content,
}: {
  handleChangeContent: (value: string) => void
  content: string
}) {
  const [uploadImage, { loading }] = usePost<string, FormData>({
    url: API_ROUTES.ADMIN.MEDIA.UPLOAD_IMAGE,
    onCompleted: (url) => {
      console.log(url)
    },
  })

  const fileInputRef = useRef<null | HTMLInputElement>(null)

  const handleChange = (value: string) => {
    handleChangeContent(value)
  }

  const handleClickInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleUploadImage = (file: File) => {
    const data = new FormData()
    data.append("file", file)

    uploadImage({ body: data })
  }

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files.item(i)

        if (file) {
          handleUploadImage(file)
        }
      }
    }
  }

  return (
    <div className='flex flex-col w-full'>
      <CodeEditor
        height={600}
        onChange={handleChange}
        code={content}
        fontSize={15}
        language='markdown'
      />

      <div className='flex py-2 bg-darkColor px-5 border-t-2 border-t-white w-full justify-end'>
        <ChacaSimpleButton
          onClick={handleClickInput}
          color='cancel'
          size='small'
          text='Upload Image'
        />
      </div>

      <input
        type='file'
        className='hidden'
        multiple={false}
        accept='image/*'
        ref={fileInputRef}
        onChange={handleChangeImage}
        disabled={loading}
      />
    </div>
  )
}
