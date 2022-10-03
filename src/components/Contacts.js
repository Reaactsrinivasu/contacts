import React from 'react';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {loadUsersStart} from '../redux/actions/actions.js';
// import { connect } from 'react-redux';
import AddEditModal from './AddEditModal';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineEdit, AiTwotoneDelete, AiFillEye } from 'react-icons/ai';
function Users() {
   // const dispatch = useDispatch();
   // const users = useSelector(state=>state.data);
   // console.log(users )
   // useEffect(() => {
   //    dispatch(loadUsersStart([]));
   //  }, [])
   return (
      <div>
         <div className='container d-flex flex-row justify-content-between mt-5'>
            <h1>All Contacts</h1>
            <Button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Contact</Button>
         </div>
         <AddEditModal />
         <div className='container mt-5'>
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th className='text-center'>S.No</th>
                     <th className='text-center'>Name</th>
                     <th className='text-center'>Phone Number</th>
                     <th className='text-center'>Eamil</th>
                     <th className='text-center'>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {/* {users.length > 0 && users.map((user, index) => (
                     <tr className='text-center' key={index}> 
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td> 
                         <td>
                           <a href="#"><AiFillEye /></a>&nbsp;
                           <a href="#" style={{ color: 'green', }}><AiOutlineEdit /></a>&nbsp;
                           <a href="#" style={{ color: 'orangered', }}><AiTwotoneDelete /></a>
                        </td>
                     </tr> 
                    ))}  */}
                  {/* {users.length === 0 && <p>No users available!</p>} */}
                  {/* {error && !loading && <p>{error}</p>} */}
               </tbody>
            </Table>

         </div>
      </div>

   )
}
// const mapStateToProps = (state) => {
//    console.log(state.users); 
//    return {
//       contacts: state.users,
//    };
// };

// const mapDispatchToProps = (dispatch) => {
//    return {
//       getAllContacts: () => dispatch({
//          type: "GET_ALL_CONTACTS",
//       })
//    };
// };

// const mapDispatchToProps = (dispatch)=>{
//   getAllContacts:()=> dispatch(getAllContacts())
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Users)
 export default Users;