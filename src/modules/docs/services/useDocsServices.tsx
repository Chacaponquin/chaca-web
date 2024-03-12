interface GetDocProps {
  file: string
  folder: string
}

export default function useDocsServices() {
  async function getDoc({ file, folder }: GetDocProps) {
    return fetch(`/docs/${folder}/${file}.md`).then((res) => res.text())
  }

  return { getDoc }
}
