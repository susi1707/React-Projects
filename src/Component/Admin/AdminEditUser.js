import React from 'react'
import Model from 'react-modal'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminEditUser({ isOpen, onClose,data }) {
    const REST_API_BASE_URL = 'http://localhost:8080/admin/';
    const [adminUser, setAdminUser] = useState(data);
    const [dropdownOptions, setDropdownOptions] = useState({
        languages: [],
        regions: [],
        roles: [],
        branches: []
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminUser({ ...adminUser, [name]: value });
    }
    console.log(adminUser);

    useEffect(() => {
        setAdminUser(data);
    }, [data]);

    useEffect(()=>{        
        axios.get(`${REST_API_BASE_URL}options`)
        .then(response => {
            setDropdownOptions(response.data);
        })
        .catch(error => console.error(error));        
}, [])
    

    
    const createAdminUser = (adminUser) => {
       axios.put(`${REST_API_BASE_URL}${adminUser.adminId}`, adminUser)
            .then(response => {
                console.log(response.data);
                onClose();
                window.location.reload();
            })
            .catch(error => console.error(error));
    };
    const sumbitHandler = (event) => {
        event.preventDefault();
        createAdminUser(adminUser);
    }

  return (
    <div>
      <Model ariaHideApp={false} isOpen={isOpen} onRequestClose={onClose} style={{
            overlay: {
                backgroundColor: "rgba(128, 128, 128, 0.7)",
                zIndex: 1

            },
            content: {
                margin: "auto",
                marginTop: "100px",
                height: "65%",
                width: "50%",
                transition: "opacity 0.3s ease-in-out"

            }
        }} className={isOpen ? 'fade-in' : ''}>
            <div className="card mb-3" id='adduser'>
                <div className="card-header ">
                    <span>Add Admin</span>
                    <button className="close" onClick={onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="card-body">
                    <form >
                        <div className="form-row">

                            <div className="form-group col-md-3">
                                <label>Admin ID</label>
                                <input type="text" name="adminId" className="form-control" value={adminUser.adminId} disabled/>
                            </div>
                            <div className="form-group col-md-3 ">
                                <label >FirstName</label>
                                <input type="text" name='firstName' className="form-control" value={adminUser.firstName} onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label >MiddleName</label>
                                <input type="text" name="middleName" className="form-control" value={adminUser.middleName} onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label >LastName</label>
                                <input type="text" name="lastName" className="form-control" value={adminUser.lastName} onChange={handleChange} />
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label >Employee Number</label>
                                <input type="text" name="employeeNumber" className="form-control" value={adminUser.employeeNumber} onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label >Language</label>
                                <select className="form-control" onChange={handleChange} value={adminUser.language} name='language'>
                                    <option>Select</option>
                                    {
                                        dropdownOptions.languages.map((language,index)=>(
                                            <option key={index}>{language}</option>
                                        ))
                                    }                                    
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label >Email ID</label>
                                <input type="email" name="emailId" className="form-control" value={adminUser.emailId} disabled/>
                            </div>
                            <div className="form-group col-md-3">
                                <label>Role</label>
                                <select type="input" className="form-control" value={adminUser.role} onChange={handleChange} name="role">                                    
                                    <option>Select</option>
                                    {
                                        dropdownOptions.roles.map((role,index)=>(
                                            <option key={index}>{role}</option>
                                        ))
                                    } 
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label >Region</label>
                                <select type="input" onChange={handleChange} value={adminUser.region} name='region' className="form-control">
                                <option>Select</option>
                                    {
                                        dropdownOptions.regions.map((region,index)=>(
                                            <option key={index}>{region}</option>
                                        ))
                                    } 
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label >Branch</label>
                                <select type="input" onChange={handleChange} value={adminUser.branch} name='branch' className="form-control">                                 
                                    <option>Select</option>
                                    {
                                       dropdownOptions.branches.map((branch,index)=>(
                                            <option key={index}>{branch}</option>
                                        ))
                                    } 
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label >Contact Number</label>
                                <input type="text" name="contactNumber" value={adminUser.contactNumber} className="form-control" onChange={handleChange} />
                            </div>
                            <div className="form-check" style={{
                                marginTop: "40px",
                                marginLeft: "10px"
                            }}>
                                <input className="form-check-input" type="checkbox" checked={adminUser.activate  === "true"} name='activate' onChange={handleChange} />
                                <label>Activate</label>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="d-flex justify-content-end">
                            <div className="row">
                                <div className="col-auto">
                                    <button className="form-control btn btn-info" onClick={sumbitHandler}>Update</button>
                                </div>
                                <div className="col-auto" style={{left:"-20px"}}>
                                    <button className="form-control btn btn-outline-info" onClick={onClose}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </Model>
    </div>
  )
}
