import { useRef } from 'react'

const ProgessBar = ({ porcent }: { porcent: number }) => {
  const porcentDiv = useRef<HTMLDivElement>(null)

  return (
    <div className='max-w-[700px] w-full rounded-full bg-slate-100 h-[17px]' ref={porcentDiv}>
      <div
        className={
          'absolute rounded-full bg-gradient-to-r from-principalColor to-secondColor h-[17px] transition-all duration-75'
        }
        style={{
          width: `${
            porcentDiv.current ? Number((porcentDiv.current.clientWidth! * porcent) / 100) : 0
          }px`,
        }}
      ></div>
    </div>
  )
}

export default ProgessBar
