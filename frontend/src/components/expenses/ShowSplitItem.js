import {useState, useEffect} from 'react'
import axios from 'axios';
const SplitItem = () => {
    

    return ( 
        <div>
            <div >
                <div className="row">
                    {Object.values(listData).map((e) => {
                        return (
                            <div className="col card">
                                <div className="card-body">
                                    <ExpenseList dataOfItem={e} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default SplitItem;