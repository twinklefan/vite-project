import React from "react"
import Card from './Card';
import {data} from './data'

import './App.css'

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

