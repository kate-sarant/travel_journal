import React from 'react'
import './index.css'
import Header from './components/Header.js'
import Card from './components/Card.js'
import data from './data.js'

export default function App() {
const cards =data.map(item=>{

  return< Card key={item.id} {...item}/>
})


  return (
    <div className='myApp'>

  <Header />
    {cards}
  {/* <Card /> */}
  </div>
    )
}


