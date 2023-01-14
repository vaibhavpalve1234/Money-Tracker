import ShowSplitItem from './ShowSplitItem'
const SplitItems  = (props) => {
    console.log(props.splitItemList);
    return ( 
    <div>
        <div className="row">
                    {Object.values(props.splitItemList).map((e) => {
                        console.log(e);
                        return (
                            <div className="col card">
                                <div className="card-body">
                                    <ShowSplitItem splitItemList={e} />
                                </div>
                            </div>
                        )
                    })}
            </div>
    </div> 
    );
}
 
export default SplitItems;