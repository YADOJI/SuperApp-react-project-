import React from 'react'
import BG from "../../assets/BGimage.png"
import styles from "../../components/Register/Bannerstyle.css"

const Banner = () => {
  return (
    <div className='banner'>
      <h1 className='bannerText' >Discover new things on Superapp</h1>
      <img src={BG} alt='bg' className='bannerImage' />
    </div>
  )
}

export default Banner