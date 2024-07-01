import React from 'react'
import Header from './components/header/Header';
import Fake from './components/fake/Fake';
import Dummy from './components/dummy/Dummy';
const HomePage = ({addToCart}) => {
  return (
    <div>
       <Header/>
      <Fake addToCart= {addToCart}/>
      <Dummy addToCart= {addToCart}/>
    </div>
  )
}

export default HomePage
