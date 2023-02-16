import React, { Fragment } from "react"
import MDEditor from "@uiw/react-md-editor"

export default function EditPlayground({
  content,
  handleChange,
  handleUploadImage,
  loading,
  fileInputRef,
}: {
  content: string
  handleChange: (value: string) => void
  handleUploadImage: (file: File) => void
  loading: boolean
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>
}) {
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
    <Fragment>
      <MDEditor
        value={content}
        height={600}
        onChange={(v) => handleChange(v || "")}
        hideToolbar={true}
        preview='edit'
        className='bg-darkColor box-border border-none resize-none rounded-none shadow-none'
        textareaProps={{}}
      />

      <input
        type='file'
        className='hidden '
        multiple={false}
        accept='image/*'
        ref={fileInputRef}
        onChange={handleChangeImage}
        disabled={loading}
      />
    </Fragment>
  )
}
