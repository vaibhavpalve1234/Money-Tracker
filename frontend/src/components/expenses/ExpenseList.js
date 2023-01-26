import { Formik } from 'formik';
const ExpenseList = ({dataOfItem}) =>{
    const formik = useFormik({
        initialValues: {
            payerId: dataOfItem.payerId,
            amount:dataOfItem.amount,
            category:dataOfItem.category,
            description:dataOfItem.description
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


}





















































// import { useEffect, useState } from 'react'
// import EditExpenseItem from './EditExpensetItem'
// import DeleteExpenseItem from './DeleteExpenseItem'
// import ShowItem from './ShowItem'
// import {useNavigate} from 'react-router-dom';
// const ExpenseList = ({ dataOfItem }) => {
//     const navigate = useNavigate()
//     const [formOpen, setFormOpen] = useState(false);
//     const [remove, setRemove] = useState(false);
//     const [showItem, setShowItem] = useState(false);
//     console.log(dataOfItem);

//     return (

//         <>
//     {pageData && (
//       <div>
//         <div className="row">
//           <div className="row row-cols-md-2  row-cols-lg-2 row-cols-xl-2 font-weight-bold">
//             {showDatas &&
//               showDatas?.map((data) => {
//                 return (
//                   <div class="col-10 col-sm-2 ">
//                     {action === false && (
//                       <div>
//                         <p>
//                           <div className="card-body row row-cols-md-2 m-2 p-2 row-cols-lg-2 row-cols-xl-2 border-light shadow">
//                             <span
//                               className="d-flex fw-bold justify-content-start"
//                               title={data.address_type}
//                               data-toggle="tooltip"
//                             >
//                               {data.address_type}
//                             </span>
//                             <span className="d-flex justify-content-end">
//                               <BsPencilSquare
//                                 title="Update information"
//                                 data-toggle="tooltip"
//                                 onClick={(e) => {
//                                   setAction(action === true ? false : true);
//                                   setUserDatas(data);
//                                 }}
//                                 size={20}
//                               />
//                             </span>
//                             <li className="list-group-item">
//                               {" "}
//                               <label>{pageData.text1}</label>:- {data.address1}
//                             </li>
//                             <li className="list-group-item">
//                               <label>{pageData.text2} </label>:- {data.address2}
//                             </li>
//                             <li className="list-group-item">
//                               <label>{pageData.text3}</label>:- {data.address3}
//                             </li>
//                             <li className="list-group-item">
//                               <label>{pageData.text4}</label>:-{data.address4}
//                             </li>
//                             <li className="list-group-item">
//                               <label>{pageData.text5}</label>:- {data.pin_code}
//                             </li>
//                             <li className="list-group-item">
//                               <label>{pageData.text6}</label>:-{data.address5}
//                             </li>
//                             <li className="list-group-item">
//                               <label>{pageData.text7}</label> :- {data.country}
//                             </li>
//                             <li className="list-group-item">
//                               <label>{pageData.text8}</label> :-{" "}
//                               {userDatas.c_state}
//                             </li>
//                             <li className="list-group-item">
//                               <label>{pageData.text9}</label> :- {data.phone}
//                             </li>
//                             <li className="list-group-item">
//                               <label>{pageData.text10}</label>:- {data.email}
//                             </li>
//                           </div>
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             {userDatas && (
//               <span className="text-right">
//                 <button
//                   className="ml-2 btn-sm btn-primary"
//                   title={pageData.button.title}
//                   data-toggle="tooltip"
//                   onClick={(e) => {
//                     setAction(true);
//                     setUserDatas("");
//                   }}
//                 >
//                   {pageData.button.label}
//                 </button>
//               </span>
//             )}
//           </div>
//         </div>
//         {/* 
//                <div className=''>
//                    <span className='d-flex justify-content-end'><BsPencilSquare onClick={e => setEditData(editData === true ? false : true)} size={20} /></span>
//                </div> */}
//         {action === true && (
//           <div className="card card-body border-light shadow-sm mb-4">
//             <Formik
//               initialValues={initial}
//               validationSchema={validate}
//               onSubmit={submit}
//             >
//               {(formik) => (
//                 <div className="">
//                   <Form>
                    
//                   </Form>
//                 </div>
//               )}
//             </Formik>
//           </div>
//         )}
//       </div>
//     )}
//   </>





//         // <nav>
//         //     <div>
//         //         {formOpen && <EditExpenseItem dataOfItem={dataOfItem} />}
//         //     </div>
//         //     <div>
//         //         {remove && <DeleteExpenseItem payerId={dataOfItem.payerId}  />}
//         //     </div>
//         //     <div>
//         //         {showItem && <ShowItem dataOfItem={dataOfItem}  />}
//         //     </div>
//         //     <br />
//         //     <label>payerId:</label>
//         //     <div>
//         //         {dataOfItem.payerId}
//         //     </div>
//         //     <br />
//         //     <label>Amount:</label>
//         //     <div>
//         //         {dataOfItem.amount}$
//         //     </div>
//         //     <br />
//         //     <label>Category:</label>
//         //     <div>
//         //         {dataOfItem.category}
//         //     </div>
//         //     <br />
//         //     <label>description:</label>
//         //     <div>
//         //         {dataOfItem.description}
//         //     </div>
//         //     <div>
//         //         <button onClick={() => { setFormOpen(true) }} value={dataOfItem}> Edit!
//         //         {/* {formOpen && navigate(`EditForm/`,{replace:true})} */}
//         //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
//         //                 <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//         //                 <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
//         //             </svg>
//         //         </button>

//         //     </div>
//         //     <div>
//         //         <button onClick={() =>{setRemove(true)}}>
//         //                 Icon Delete
//         //         </button>
//         //     </div>
//         //     <div>
//         //         <button onClick={() =>{setShowItem(true)}}>
//         //                 Show Item
//         //         </button>
//         //     </div>
//         // </nav>
        
//         );
// }

// export default ExpenseList;