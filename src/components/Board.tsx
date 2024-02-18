import Button from './Button'

function Board() {
    return (
        <>
            <div className="board-row">
                <Button label='1' />
                <Button label='2' />
                <Button label='3' />
            </div>

            <div className="board-row">
                <Button label='4' />
                <Button label='5' />
                <Button label='6' />
            </div>

            <div className="board-row">
                <Button label='7' />
                <Button label='8' />
                <Button label='9' />
            </div>

        </>
    )
}

export default Board;
