import "./Button.scss"

function Button(props) {
    return(
        <button onClick={props.checkFn}>{props.title}</button>
    )
}

export default Button