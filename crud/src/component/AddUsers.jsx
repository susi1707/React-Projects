import React, { useState } from 'react'

export default function AddUsers(props) {
    const [add,setAdduser]=useState({name:"",age:""});
const handleChange=(event)=>{
   setAdduser({...add,[event.target.name]:event.target.value});   
}

const handlesubmit=(event)=>{
    event.preventDefault();
    props.addingUser(add);
    console.log(add);
 }

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <label>Name</label>
            <input type="text" name="name" value={add.name} placeholder=' Enter your Name' onChange={handleChange}/>
            <label>Age</label>
            <input type="text" name="age" value={add.age} placeholder=' Enter your Age'onChange={handleChange}/>
            <button>Add User</button>
        </form>
    </div>
  )
}
