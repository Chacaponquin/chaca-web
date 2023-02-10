import { DocsConfigHeader, DocsInput, DocsMenu } from "./components"
import { useState } from "react"
import { ISubSectionForm } from "./interfaces/subSectionForm.interface"

export default function EditDocumentation() {
  const [subSectionForm, setSubSectionForm] = useState<ISubSectionForm>({
    title: "",
    language: "en",
    content: "",
  })

  const handleChangeTitle = (value: string) => {
    setSubSectionForm({ ...subSectionForm, title: value })
  }

  const handleChangeLanguage = (value: string) => {
    setSubSectionForm({ ...subSectionForm, language: value })
  }

  const handleChangeContent = (value: string) => {
    setSubSectionForm({ ...subSectionForm, content: value })
  }

  return (
    <div className='w-full h-screen flex'>
      <DocsMenu />

      <div className='h-full w-full'>
        <DocsConfigHeader
          handleChangeLanguage={handleChangeLanguage}
          handleChangeTitle={handleChangeTitle}
          language={subSectionForm.language}
          title={subSectionForm.title}
        />
        <DocsInput content={subSectionForm.content} handleChangeContent={handleChangeContent} />
      </div>
    </div>
  )
}
