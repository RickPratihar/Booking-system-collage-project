import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Offers from '../../components/offers/Offers';
import Blog from '../../components/blog/Blog';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Offers/>
      <Blog/>
    </div>
  )
}

export default Home;