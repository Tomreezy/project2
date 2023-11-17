

import React from 'react'
import NavBar from '../components/NavBar'
import Announcements from '../components/announcements'
import Slider from '../components/Slider'
import Categories from '../components/Categories';
import Products from '../components/Products'

export default function Home() {
  return (
    <div>
         <Announcements />       
        <NavBar />
        <Slider />
        <Categories />
        <Products />
    </div>
  )
}
