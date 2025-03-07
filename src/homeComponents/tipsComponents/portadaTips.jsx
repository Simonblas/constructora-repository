import React from 'react'

export const PortadaTips = React.forwardRef((props, ref) => {
  return (
    <div className='container-tips' ref={ref}>
      <h5 className='portada-text'>
        <span id='numero-3'>3</span>
        <span className='spanBold span-block'>Tips</span>
        <span className='span-block'> para elegir </span>
        el
        <span className='spanBold'> galpón </span>
        ideal
      </h5>
    </div>
  )
})
