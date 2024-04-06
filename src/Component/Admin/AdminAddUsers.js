import { useEffect, useState } from 'react';
import Model from 'react-modal';
import axios from 'axios';
import '../Admin/Css/AdminAddUsers.css';

export default function AdminAddUsers({ isOpen, onClose }) {
    const REST_API_BASE_URL = 'http://localhost:8080/admin/';
    const [adminUser, setAdminUser] = useState([]);
    const [dropdownOptions, setDropdownOptions] = useState({
        languages: [],
        regions: [],
        roles: [],
        branches: [] 
    });
    // const [languageData, setlanguageData] = useState([]);
    // const [regionData, setRegionData] = useState([]);
    // const [roleData, setRoleData] = useState([]);
    // const [branchData, setBranchData] = useState([]);  

    // const fetchLanguageDdrop=()=>{
    //     axios.get(`${REST_API_BASE_URL}language`)
    //     .then((res) => {
    //         setlanguageData(res.data)})   
    //         .catch(error => console.error(error));     
    // }
    // const fetchRegionDdrop=()=>{
    //     axios.get(`${REST_API_BASE_URL}region`)
    //     .then((res) => {
    //         setRegionData(res.data)})   
    //         .catch(error => console.error(error));     
    // }
    // const fetchRoleDdrop=()=>{
    //     axios.get(`${REST_API_BASE_URL}role`)
    //     .then((res) => {
    //         setRoleData(res.data)})   
    //         .catch(error => console.error(error));     
    // }
    // const fetchBranchDdrop=()=>{
    //     axios.get(`${REST_API_BASE_URL}branch`)
    //     .then((res) => {
    //         setBranchData(res.data)})   
    //         .catch(error => console.error(error));     
    // }


    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminUser({ ...adminUser, [name]: value });
    }
    useEffect(()=>{
        // fetchLanguageDdrop();
        // fetchRegionDdrop();
        // fetchRoleDdrop();
        // fetchBranchDdrop();
        axios.get(`${REST_API_BASE_URL}options`)
        .then(response => {
            setDropdownOptions(response.data);
        })
        .catch(error => console.error(error));
}, [])
    

    
    const createAdminUser = (adminUser) => {
        axios.post(REST_API_BASE_URL, adminUser)
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
                                <input type="text" name="adminId" className="form-control" onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-3 ">
                                <label >FirstName</label>
                                <input type="text" name='firstName' className="form-control" onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label >MiddleName</label>
                                <input type="text" name="middleName" className="form-control" onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label >LastName</label>
                                <input type="text" name="lastName" className="form-control" onChange={handleChange} />
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label >Employee Number</label>
                                <input type="text" name="employeeNumber" className="form-control" onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label >Language</label>
                                <select className="form-control" onChange={handleChange} name='language'>
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
                                <input type="email" name="emailId" className="form-control" onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Role</label>
                                <select type="input" className="form-control" onChange={handleChange} name="role">                                    
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
                                <select type="input" onChange={handleChange} name='region' className="form-control">
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
                                <select type="input" onChange={handleChange} name='branch' className="form-control">                                 
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
                                <input type="text" name="contactNumber" className="form-control" onChange={handleChange} />
                            </div>
                            <div className="form-check" style={{
                                marginTop: "40px",
                                marginLeft: "10px"
                            }}>
                                <input className="form-check-input" type="checkbox" name='activate' onChange={handleChange} />
                                <label>Activate</label>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="d-flex justify-content-end">
                            <div className="row">
                                <div className="col-auto">
                                    <button className="form-control btn btn-outline-info" onClick={sumbitHandler}>Add Admin</button>
                                </div>
                                <div className="col">
                                    <button className="form-control btn btn-info" onClick={onClose}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </Model>
    );

}
