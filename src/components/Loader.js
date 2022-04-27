import React from 'react'
import { BoxesLoader } from 'react-awesome-loaders'

const Loader = () => {
  return (
    <div className='load'>
      <BoxesLoader
        className='loaderr'
        boxColor={'#FCBF49'}
        shadowColor={'none'}
        desktopSize={'128px'}
        mobileSize={'60px'}
      />
    </div>
  )
}

export default Loader
