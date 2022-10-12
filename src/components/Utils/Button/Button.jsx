/* Code generated with AutoHTML for Figma */
import './Button.css';
import { Link } from 'react-router-dom';
export const Button = ({
    type, text, clickFunction, empty
}) => {

    return (
        <button onClick={clickFunction} type={type} className="button" disabled={empty}>
            <div className="button-text">
                {text}
            </div>
        </button>
    )
}