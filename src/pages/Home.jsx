import React from 'react'
import "../style/home.css"
import Mens from './Mens'
import Kids from './Kids'
import Genz from './Genz'
import Beauty from './Beauty'

const Home = () => {
  return (
    <div>
      <h1>Men's Fashion</h1>
      <Mens/>
      <h1>Kids's Fashion</h1>
      <Kids/>
      <h1>Gen Z's Fashion</h1>
      <Genz/>
      <h1>Beauty</h1>
      <Beauty/>
    </div>
  )
}

export default Home