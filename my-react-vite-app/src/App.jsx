import React from 'react'
import Navbar from './compnents/Navbar'
import Hero from './compnents/Hero'
import Card from './compnents/card'
import data from './images/data'

export default function App() {
      
const cards = data.map(item => {
return (
  <Card 
    key={item.id}
    item={item}
  />
)
})        

return (
<div>
    <Navbar />
    <Hero />
  <section className="cards-list">
      {cards}
  </section>
</div>
)
}
