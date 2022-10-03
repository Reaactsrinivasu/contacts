import React, { useEffect } from 'react';
import AddEditModal from './AddEditModal';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineEdit, AiTwotoneDelete, AiFillEye } from 'react-icons/ai';
import { loadUsersStart,deleteUserStart ,loadSingleUser } from '../redux/actions/actions.js';
import { useSelector,useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';

const Users = () => {
const dispatch = useDispatch();
const users = useSelector((state)=>state.users);
 const loading = useSelector(state => state.users.loading);
 const error = useSelector(state => state.users.error);
// console.log('users',users);
const [userInfo,setUserInfo]= useState({});


useEffect(() => {
 dispatch(loadUsersStart());
}, [])


const handleDelete =(id)=> {
   if (window.confirm('confirm to delete')) {
      dispatch(deleteUserStart(id));
      toast.success("User deleted Successfully");
      
   }
}
const handleEdit = (id)=>{
   // console.log("user", id);
   setUserInfo(id);
}


  return (
    <div>
        
      <div>
         <div className='container d-flex flex-row justify-content-between mt-5'>
            <h1>All Contacts</h1>
            <Button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Contact</Button>
         </div>
         <AddEditModal userInfo={userInfo}/>
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
                     {users.length > 0 && users.map((user, index) => (
                     <tr className='text-center' key={index}> 
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td> 
                         <td>
                           <a href="#" title="view"><AiFillEye /></a>&nbsp;
                           <a href="#" title="edit" onClick={()=>handleEdit(user)} style={{ color: 'green', }} data-bs-toggle="modal" data-bs-target="#exampleModal"><AiOutlineEdit /></a>&nbsp;
                           <a href="#" title="delete" onClick={()=>handleDelete(user.id)} style={{ color: 'orangered', }}><AiTwotoneDelete /></a>
                        </td>
                     </tr> 
                    ))} 
               </tbody>
            </Table>
                  {users.length === 0 && <p>No users available!</p>}
                  {/* {error && !loading && <p>{error}</p>} */}

         </div>
      </div>

   

    </div>
  )
}

export default Users;