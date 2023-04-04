import React from 'react'
import Announcement from '../component/Announcement';
import Footer from '../component/Footer';
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
        <Products to="/product/:id"/>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home;




