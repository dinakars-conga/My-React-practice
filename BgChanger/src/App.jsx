import React, { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("");

  const colorArr = [
    "Red", "Green", "Blue",
    "Orange" , "Brown", "Aliceblue", "Yellow", "Pink"
  ]

  const handleClick = (value) => {
      console.log(value+" button clicked");
      setColor(value);
  }
  return (
    <>
      <div className="back" style={{backgroundColor:color}}>
        <h1>{color ? color : "Choose any color"}</h1>
        <div className="inside">
            {colorArr.map((item)=> <button key={item} onClick={()=> handleClick(item)} style={{backgroundColor:item}}>{item}</button>)}
        </div>
      </div>
    </>
  )
}

export default App