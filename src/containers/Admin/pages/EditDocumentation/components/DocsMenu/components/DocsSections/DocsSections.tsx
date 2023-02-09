import React from "react"

export default function DocsSections() {
  return (
    <div className='w-full flex flex-col mt-2'>
      {[1, 2, 3, 4, 5, 5].map((s, i) => (
        <div className='flex flex-col mb-2' key={i}>
          <div className='text-black font-fontBold'>Lorem, ipsum dolor.</div>
          <div className='flex flex-col'>
            {[1, 2, 3, 4, 5, 5].map((f, i) => (
              <div key={i} className='pl-2'>
                Lorem, ipsum dolor.
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
