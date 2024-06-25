import Button from "./Button"
import "./UpperPart.scss"

export function UpperPart (){
    return(
        <section className="upperpart">

            <div className="wrapper1">
            <Button title="Again!"/>
            <h3>(Between 1 and 20)</h3>
            </div>


            <div className="wrapper2">
                <h1>Guess My Number!</h1>
                <div className="secretnumber">?</div>
            </div>

        </section>
    )
}