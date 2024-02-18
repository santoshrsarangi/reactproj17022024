function ListGroup() {

    const listitems = [
        'Inbox',
        'Outbox',
        'Sent',
        'Spam',
        'Archive'
    ]

    //listitems.map(mitem => <li>{mitem}</li><span className="=badge bg-primary rounded-pill">14</span>)


    return (
        <>
            <h1>Menu</h1>
            <ul className="list-group">
                {listitems.map(mitem => <li className="list-group-item" key={mitem}>{mitem}</li>)}
            </ul>
        </>
    )

}

export default ListGroup 