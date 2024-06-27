import "./BelowPart.scss"
import Button from "./Button"
import { useRef } from "react";

export function BelowPart(props){
    const input = useRef()
    console.log(props.secretNumber);
    const checkNumber=()=>{
        console.log(input.current.value);
    }

    return(
        <section className="belowpart">

            <div className="wrapper3">
                <input type="text" ref={input} />
                <Button title="Check!" checkFn={checkNumber}/>
            </div>


            <div className="wrapper4">
                <h2 className="message">Start guessing...</h2>
                <h2>⭐Score: <span className="score">20</span> </h2>
                <h2>🔥Highscore: <span className="highscore">0</span> </h2>
            </div>

        </section>
    )
}