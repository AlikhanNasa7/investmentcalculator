import React from 'react'
const Header = ({src,text}) => {
  return (
    <>
        <img src={src} className='App-logo'></img>
        <h1 className='App-header'>{text}</h1>
    </>
  )
}

export default Header