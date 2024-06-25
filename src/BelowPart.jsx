import "./BelowPart.scss"
import Button from "./Button"

export function BelowPart(){
    return(
        <section className="belowpart">

            <div className="wrapper3">
                <input type="text" />
                <Button title="Check!"/>
            </div>


            <div className="wrapper4">
                <h2 className="message">Start guessing...</h2>
                <h2>⭐Score: <span className="score">20</span> </h2>
                <h2>🔥HIghscore: <span className="highscore">0</span> </h2>
            </div>

        </section>
    )
}