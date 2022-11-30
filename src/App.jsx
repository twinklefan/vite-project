import { useState } from 'react'
import 'App.css'
import Card from 'Card.jsx';
import { data } from 'data'

export default function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              content={item.content}
              name={item.name}
              clas={item.clas}
          />
      )
  })        
  
  return (
    <div>
      <header>
        <h1>Left Hand Side!</h1>
      </header>
      <div className="card-container">
          {cards}
      </div>
    </div>
  )
}

