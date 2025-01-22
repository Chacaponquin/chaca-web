import LibSwitch from "react-switch"

interface Props {
  checked: boolean
  onChange(v: boolean): void
}

export default function ChacaSwitchButton({ checked, onChange }: Props) {
  return (
    <LibSwitch
      checked={checked}
      onChange={onChange}
      checkedIcon={false}
      uncheckedIcon={false}
      activeBoxShadow=""
      handleDiameter={15}
      height={24}
      width={46}
      onColor="#7d5fff"
    />
  )
}
