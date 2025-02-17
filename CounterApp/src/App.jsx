import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");


  const handlePlus = () => {
    if(count>=9){
      setCount( c => c+1 );
      setMsg("MAX limit reached !");
      console.log("Max Limit !");
      return;
    }

    setMsg("");
    setCount( c => c+1 );
    console.log("Plus Count");
  }

  const handleMinus = () => {
    if(count<=-9){
      setCount( c => c-1 );
      setMsg("MIN limit reached !")
      console.log("Min Limit !");
      return;
    }

    setMsg("");
    setCount( c => c-1 );
    console.log("Minus Count");
  }


  return (
    <>
      <div className="container">
        <h2>Counter App</h2>
        <p>Use  <span>+</span>  and  <span>-</span> button </p>
        <p>Max  <span>+10</span>  and  Min <span>-10</span> </p>
        <div className="counterWrap">
          {count}
        </div>
        <div className="btnWrap">
          <button id='pbtn' onClick={handlePlus} disabled={count>=10 ? true : false }>+</button>
          <button id='mbtn' onClick={handleMinus} disabled={count<=-10 ? true : false}>-</button>
        </div>
        <p id='warn'> {msg ? `* ${msg}` : null}</p>
      </div>
    </>
  )
}

export default App
