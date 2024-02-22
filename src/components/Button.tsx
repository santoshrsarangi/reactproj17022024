
function Button({ label, handleClick }) {

    return (
        <button className="square" onClick={handleClick}>{label}</button>
    );
}

export default Button