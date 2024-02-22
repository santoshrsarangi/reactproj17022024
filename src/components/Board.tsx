import { useState } from 'react';
import Button from './Button'

function Board() {

    const [btnValue, setBtnValue] = useState(Array(9).fill(null))
    const [selectedValue, setSelectedValue] = useState('X')

    function btnClicked(i: number) {

        if (btnValue[i]) {
            return;
        }

        const selectedSquare = btnValue.slice()
        selectedSquare[i] = selectedValue
        if (selectedValue == 'X') {
            setSelectedValue('O')
        } else {
            setSelectedValue('X')
        }
        setBtnValue(selectedSquare)
    }

    return (
        <>
            <div className="board-row">
                <Button label={btnValue[0]} handleClick={() => btnClicked(0)} />
                <Button label={btnValue[1]} handleClick={() => btnClicked(1)} />
                <Button label={btnValue[2]} handleClick={() => btnClicked(2)} />
            </div>

            <div className="board-row">
                <Button label={btnValue[3]} handleClick={() => btnClicked(3)} />
                <Button label={btnValue[4]} handleClick={() => btnClicked(4)} />
                <Button label={btnValue[5]} handleClick={() => btnClicked(5)} />
            </div>

            <div className="board-row">
                <Button label={btnValue[6]} handleClick={() => btnClicked(6)} />
                <Button label={btnValue[7]} handleClick={() => btnClicked(7)} />
                <Button label={btnValue[8]} handleClick={() => btnClicked(8)} />
            </div>

        </>
    )
}

export default Board;
