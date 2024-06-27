
import './App.css'
import Button from "./Button"
import "./UpperPart.scss"
import { useRef } from "react"
import { useState } from "react"
import "./BelowPart.scss"


function App() {


    const [secretNumber, setSecretNumber] = useState(Math.trunc(Math.random()*20)+1)
    const [isSuccess, setIsSeccess] = useState(false)
    const [isLow, setIsLow] = useState(false)
    const [isHigh, setIsHigh] = useState(false)
    let [score, setScore] = useState(20)

    const testFunc=()=>{
        setSecretNumber(Math.trunc(Math.random()*20)+1)
        setIsSeccess(false)
        setIsLow(false)
        setIsHigh(false)
        input.current.value = ""
        setScore(score = 20)
    }

    const input = useRef()
    const checkNumber=()=>{
          
        if(input.current.value == secretNumber){
          setIsSeccess(true)
          input.current.value = ""
        } else if(input.current.value < secretNumber){
          setIsLow(true)
          input.current.value = ""
          setScore(score - 1)
        } else if(input.current.value > secretNumber){
          setIsHigh(true)
          input.current.value = ""
          setScore(score - 1)
        }
    }
  return (
    <>

      <section className="upperpart">

            <div className="wrapper1">
            <Button title="Again!" checkFn={testFunc}/>
            <h3>(Between 1 and 20)</h3>
            </div>


            <div className="wrapper2">
                <h1>Guess My Number!</h1>
                <div className="secretnumber">{isSuccess ? (secretNumber) : "?"}</div>
                
            </div>

        </section>
          <h2>{secretNumber}</h2>

      <section className="belowpart">

            <div className="wrapper3">
                <input type="text" ref={input} />
                <Button title="Check!" checkFn={checkNumber}/>
            </div>


            <div className="wrapper4">
                <h2 className="message">
                  {isSuccess ? "You won 🎉" : "Start guessing..." &&
                   isLow ? "Too Low" : "Start guessing..." &&
                   isHigh ? "Too High" : "Start guessing..."
                  } 
                  </h2>
                <h2>⭐Score: <span className="score">{score}</span> </h2>
                <h2>🔥Highscore: <span className="highscore">0</span> </h2>
            </div>

        </section>
    </>
  )
}

export default App
