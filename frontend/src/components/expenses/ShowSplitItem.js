const ShowItem = (props) => {
    const splitdata=props.splitItemList
    console.log(splitdata);
    
    return (
        <div>
            <label>Id:</label>
            <div>
                {splitdata.id}
            </div>
            <br />
            <label>Amount:</label>
            <div>
                {splitdata.amount}$
            </div>
            <br />
            <label>Category:</label>
            <div>
                {splitdata.category}
            </div>
            <br />
            <label>transaction_id:</label>
            <div>
                {splitdata.transaction_id}
            </div>
            <br />
            <label>description:</label>
            <div>
                {splitdata.description}
            </div>
            <br />
            <label>created_at:</label>
            <div>
                {splitdata.created_at}
            </div>
            <br />
            <label>updated_at:</label>
            <div>
                {splitdata.updated_at}
            </div>
            <br />
        </div>
    );
}

export default ShowItem;