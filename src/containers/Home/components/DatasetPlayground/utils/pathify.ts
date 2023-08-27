import { Coords } from "../interfaces/point.interface"

interface PathifyProps {
  paths: Array<Coords>
}

export const pathify = ({ paths }: PathifyProps) => {
  const subPaths = paths.map((p) => {
    // if (index === 1) return `C ${p.x} ${p.y}`
    // else return `${p.x} ${p.y}`

    return `${p.x} ${p.y}`
  })

  const path = `M ${subPaths.join(" ")}`

  return path
}
