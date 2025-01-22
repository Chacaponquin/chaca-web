import { API_ROUTES } from "@modules/app/constants/api-routes"
import { API_ROUTE } from "@modules/app/modules/env/domain/env"
import { DatasetError, DownloadDatasetError } from "../errors/dataset"

interface Props {
  id: string
  filename: string
  onError(error: DatasetError): void
  onFinally(): void
}

export function downloadDatasetFile({ id, filename, onError, onFinally }: Props) {
  fetch(`${API_ROUTE}/${API_ROUTES.DOWNLOAD_FILE(id)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/zip",
    },
  })
    .then((response) => {
      if (response.ok) {
        response
          .blob()
          .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]))

            const link = document.createElement("a")
            link.href = url
            link.download = `${filename}.zip`

            document.body.appendChild(link)
            link.click()
            link.parentNode?.removeChild(link)
          })
          .catch(() => {
            onError(new DownloadDatasetError())
          })
          .finally(() => {
            onFinally()
          })
      } else {
        onError(new DownloadDatasetError())
      }
    })
    .catch(() => {
      onError(new DownloadDatasetError())
    })
}
