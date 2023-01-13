const ShowItem = ({dataOfItem}) => {
    console.log({dataOfItem});
    return (
        <div>
            <label>payerId:</label>
            <div>
                {dataOfItem.payerId}
            </div>
            <br />
            <label>Amount:</label>
            <div>
                {dataOfItem.amount}$
            </div>
            <br />
            <label>Category:</label>
            <div>
                {dataOfItem.category}
            </div>
            <br />
            <label>description:</label>
            <div>
                {dataOfItem.description}
            </div>
        </div>
    );
}

export default ShowItem;