import { useState } from "react";

function Button(props: { label: string }) {

    const [btnValue, setBtnValue] = useState(' ')
    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        if (btnValue === ' ') {
            setBtnValue('X')
            setIsClicked(true)
        }
    }

    return (
        <button className="btn btn-outline-dark" onClick={handleClick}>{isClicked ? btnValue : props.label}</button>
    );
}

export default Button