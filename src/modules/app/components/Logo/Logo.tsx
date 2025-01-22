import { APP_IMAGES } from "@modules/app/constants/image"
import Image from "../Image/Image"

interface Props {
  size: number
}

export default function Logo({ size }: Props) {
  return <Image image={APP_IMAGES.LOGO} style={{ width: `${size}px` }} />
}
