import React from "react"
import { cards } from "./cards"
import "./card.less"
export default () => {

  return (
    <div className='cards'>
      {
        cards.map(card => (
          <div className="cards__item">
            <div className="cards__icon" style={{backgroundImage: card.icon}}></div>
            <div className="cards__title">{card.name}</div>
          </div>
        ))
      }
    </div>
  )
}
