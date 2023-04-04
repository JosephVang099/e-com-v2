import React from 'react'
import Announcement from '../component/Announcement';
import Navbar from '../component/Navbar';
import Newsletter from '../component/Newsletter';
import Products from '../component/Products';
import Slider from '../component/Slider';

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Products />
        <Newsletter />
    </div>
  )
}

export default Home;
