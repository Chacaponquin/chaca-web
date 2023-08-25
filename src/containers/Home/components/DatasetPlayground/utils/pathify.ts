interface PathifyProps {
  paths: { x: number; y: number }[]
}

export const pathify = ({ paths }: PathifyProps) => {
  const path = `M ${paths
    .map((p, index) => {
      if (index === 1) return `C ${p.x} ${p.y}`

      return `${p.x} ${p.y}`
    })
    .join(" ")}`

  return path
}
