import React from 'react'
import banner from '../../assets/banner.webp';
import './home.scss'

const Home = () => {
  return (
    <div className='container-home'>
      <section>
        <img src={banner} alt="banner" />
      </section>
    </div>
  )
}

export default Home