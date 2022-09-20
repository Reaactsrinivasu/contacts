import React from 'react'
import { Button,Table } from 'react-bootstrap';
import {AiOutlineEdit,AiTwotoneDelete,AiFillEye} from 'react-icons/ai';
const contacts = () => {

  const contacts = [
{name:"srinivasu",phonenumber:"6548765468",email:"srinu@gmail.com"},
{name:"sameer",phonenumber:"6548765468",email:"sameer@gmail.com"},
{name:"srikanth",phonenumber:"6548765468",email:"srikanth@gmail.com"},
{name:"chaitanya",phonenumber:"6548765468",email:"chaitanya@gmail.com"}
  ];
  return (
    <div>

    <div className='container d-flex flex-row justify-content-between mt-5'>
        <h1>All Contacts</h1>
        <Button className='btn btn-primary '>Add Contact</Button>
    </div>
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
        {contacts.length && contacts.map((contact,index)=>(

        <tr className='text-center' key={index}>
          <td>{index + 1}</td>
          <td>{contact.name}</td>
          <td>{contact.phonenumber}</td>
          <td>{contact.email}</td>
          <td>
            <a href="#"><AiFillEye/></a>&nbsp;
            <a href="#" style={{color:'green',}}><AiOutlineEdit/></a>&nbsp;
            <a href="#" style={{color:'orangered',}}><AiTwotoneDelete/></a>
          </td>
        </tr>


        ))}
      </tbody>
    </Table>

    </div>
    </div>
  )
}

export default contacts;