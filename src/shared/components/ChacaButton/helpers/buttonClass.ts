import clsx from 'clsx'
import { ChacaButtonProps } from '../interfaces/chacaButton.intrface'

export const buttonClass = ({ size, className, color }: ChacaButtonProps) => {
  return clsx(
    'font-fontBold flex items-center fill-white transition-all duration-300 hover:opacity-70',
    className,
    {
      'py-1 px-5 text-base rounded': size === 'small',
      'py-1 px-5 text-base rounded-sm': size === 'medium',
      'py-1 px-6 text-lg rounded-sm': size === 'large',
      'py-2 px-7 rounded-sm text-lg': size === 'extra-large',
    },
    {
      'bg-principalColor text-white': color === 'primary',
      'bg-principal-bg text-white': color === 'gradient',
      'bg-dangerColor text-white': color === 'danger',
      'bg-secondColor text-white': color === 'secondary',
      'bg-slate-200 text-black': color === 'cancel',
    },
  )
}
