import React,{useState,useRef, useEffect, useParams } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUserStart } from '../redux/actions/actions';
import { loadUsersStart,updateUserStart} from '../redux/actions/actions.js';
import { toast } from 'react-toastify';



const AddEditModal = ({userInfo}) => {
   console.log("userinfo1",userInfo);
   const [addUserData, setAddUserData] = useState({
      name: "",
      phone: "",
      email: ""
   });
   //  const {name,phone,email} = addUserData;
//   let buttonName = 'Add User';
 const [editMode,setEditMode] = useState(false);
//   object.keys(userInfo).length;
let id = userInfo.id;
 useEffect(()=>{
    console.log("userinfo3",userInfo.id);
   //  console.log(typeof("type",userInfo.id));
   if(id){
      setEditMode(true);
      setAddUserData(userInfo);
   }
   // else{
      
   //    setButtonName('Add User');
   // }
 },[userInfo]);


   // const user =useSelector(state=>state.users[0]);

   // console.log("user",user);
   // const handleChange =(name,value)=>{
      //    //   const oldAddUserData = {...addUserData};
      //    //   oldAddUserData[name] = value; 
      //    //    setAddUserData(oldAddUserData);
      // }
        
      const onInputChange = (e)=>{
         let {name,value} = e.target;
         setAddUserData({...addUserData, [name]: value});
      };
      const dispatch = useDispatch();
          
      const handleSubmit = (e)=>{
         const checkEmptyInput = !Object.values(addUserData).every(res=>res==="")
         if (checkEmptyInput) {

            if(!editMode){
               // console.log('editmode');
               // dispatch(updateUserStart(addUserData)); 
               // toast.success('User Updated Successfully');
               dispatch(createUserStart(addUserData)); 
               toast.success('User Added Successfully');
                  setTimeout(()=>{dispatch(loadUsersStart())},500);
                  // dispatch(loadUsersStart());
                  setAddUserData({
                     name:"",
                     phone:"",
                     email:""
                  }); 
               }else{
                  dispatch(updateUserStart({id, addUserData}));
                  setEditMode(false);
                  toast.success('User Updated Successfully');
                  setTimeout(()=>{dispatch(loadUsersStart())},500);
                  setAddUserData({
                     name:"",
                     phone:"",
                     email:""
                  }); 
               }
         }
            
            closeRef.current.click();
         }
       
            const closeRef = useRef();
            const modalClose = ()=>{
               setAddUserData({
                  name:"",
                  phone:"",
                  email:""
               });
            }
            return (
               <div>
            {/* tabindex="-1" */}
         <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">{!editMode ? "Add User" : "Update User"}</h5>
                     <button type="button" ref={closeRef} className="btn-close" data-bs-dismiss="modal"  aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                     <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control"  id="name" name="name" value={addUserData.name || ""} onChange={onInputChange}  placeholder="Enter Your Name" />
                     </div>
                     <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="phone" name="phone" value={addUserData.phone || ""} onChange={onInputChange} placeholder="Enter Your Phone Number" />
                     </div>
                     <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={addUserData.email || ""} onChange={onInputChange} placeholder="Enter Your Email Id" />
                     </div>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" onClick={()=>{modalClose()}} data-bs-dismiss="modal">Close</button>
                     <button type="submit" 
                     onClick={()=>handleSubmit()} className="btn btn-primary">{!editMode ? "Add" : "Update"}</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

// const mapStateToProps = (state) => {
//    // console.log(state.users); 
//    return {
//       addUserData: state.users,
//    };
// };

// const mapDispatchToProps = (dispatch) => {
//    //  console.log(addUsers); 
//    return {
//       addUsers: (addUserData)=>dispatch(addUsers(addUserData)),
//    };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(AddEditModal);
export default AddEditModal;