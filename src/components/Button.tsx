import { useState } from "react";

function Button(props: { label: string }) {

    const [btnValue, setBtnValue] = useState(' ')

    function handleClick() {
        setBtnValue('X')
    }

    return (
        <button className="square" onClick={handleClick}>{btnValue}</button>
    );
}

export default Button