import Button from "./Button";
import './ErrorModel.css'
const ErrorModel = (props) =>{
    return <div className="ErrorModel" onClick={props.onConfirm}>
        <header>
            <h2>{props.title}</h2>
        </header>
        <p>
        {props.msg}
        </p>
        <footer>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </div>
}
export default ErrorModel;