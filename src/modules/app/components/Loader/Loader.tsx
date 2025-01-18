import "./styles/loader.css"

interface Props {
  size: number
}

export default function Loader({ size }: Props) {
  return <div className="loader" style={{ width: `${size}px` }}></div>
}
