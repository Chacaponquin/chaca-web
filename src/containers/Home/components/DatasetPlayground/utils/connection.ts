import { DatasetConnection } from "@modules/datasets/interfaces/dataset_connect"
import { ConnectElement, ToConnect } from "../interfaces/connect.interface"

interface GetGroupedConnectionsProps {
  elements: DatasetConnection[]
}

export function getElement(id: string): Element | null {
  const element = document.getElementById(id)
  return element
}

export function getGroupedConnections({
  elements,
}: GetGroupedConnectionsProps): Array<ConnectElement> {
  const connections = [] as Array<ConnectElement>

  elements.forEach(({ to, from }) => {
    const connectEls = [] as Array<ToConnect>
    const fromElement = getElement(from)

    to.forEach((x) => {
      const element = getElement(x)

      if (element) {
        connectEls.push({
          rect: element.getBoundingClientRect(),
        })
      }
    })

    if (fromElement) {
      connections.push({
        from: fromElement.getBoundingClientRect(),
        to: connectEls,
      })
    }
  })

  return connections
}
