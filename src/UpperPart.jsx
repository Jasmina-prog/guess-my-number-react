import Button from "./Button"
import "./UpperPart.scss"
import { useRef } from "react"
import { useState } from "react"

export function UpperPart (){
    const secretNumb = useRef()
    console.log(secretNumb);

    const [secretNumber, setSecretNumber] = useState(Math.trunc(Math.random()*20)+1)
    console.log(secretNumber);
    const testFunc=()=>{
        console.log('this too');
    }

    return(
        <section className="upperpart">

            <div className="wrapper1">
            <Button title="Again!" checkFn={testFunc}/>
            <h3>(Between 1 and 20)</h3>
            </div>


            <div className="wrapper2">
                <h1>Guess My Number!</h1>
                <div className="secretnumber" ref={secretNumb}>?</div>
            </div>

        </section>
    )
}