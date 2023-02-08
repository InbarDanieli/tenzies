import React from 'react'

export default function Dice(props) {

  return (
    <div
      onClick={props.onChose}
      className={`dice ${props.chosen && "choose"}`}>
      {props.value}
    </div>
  )
}