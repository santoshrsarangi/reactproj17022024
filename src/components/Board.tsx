import { useState } from 'react';
import Button from './Button'

function Board() {

    const [btnValue, setBtnValue] = useState(Array(9).fill(null))
    const [selectedValue, setSelectedValue] = useState('X')
    const winner = calculateWinner(btnValue);

    let gameStatus;
    if (winner) {
        gameStatus = "Winner: " + winner;
    } else {
        gameStatus = "Next player: " + selectedValue;
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    function btnClicked(i: number) {

        if (btnValue[i] || calculateWinner(btnValue)) {
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
            <br></br>
            <div className="game-status">{gameStatus}</div>
        </>
    )
}

export default Board;
