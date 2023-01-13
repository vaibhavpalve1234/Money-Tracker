import ExpenseList from "./ExpenseList";
import TransactionForm from "./ExpenseItem";

const List = () => {
    return (
        <div className="navbar-nav ml-auto">
            <TransactionForm />
            <div class="container">
                <div class="row ">
                    {/* <div class="col"> */}
                        <div className="col card">
                            <div className="card-body">
                                <ExpenseList /> 
                            </div> 
                        </div>
                        <div className="col card">
                            <div className="card-body">
                                <ExpenseList /> 
                            </div> 
                        </div>
                        <div className="col card">
                            <div className="card-body">
                                <ExpenseList /> 
                            </div> 
                        </div>
                        <div className="col card">
                            <div className="card-body">
                                <ExpenseList /> 
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default List;