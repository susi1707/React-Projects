import React from 'react'
import Model from 'react-modal';
import '../Admin/Css/DeleteAlert.css';

import axios from 'axios';

export default function AgentDeleteAlert({ isOpen, onClose, deleteId }) {
    const REST_API_BASE_URL = 'http://localhost:8080/agent/';
    const deleteIdSubmit=()=>{
        axios.delete(`${REST_API_BASE_URL}${deleteId}`)
        .then(res=>console.log(res.data))
        .catch(console.error())
        onClose();
        window.location.reload();
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
                    height: "50%",
                    width: "50%",
                    transition: "opacity 0.3s ease-in-out",
                    backgroundColor: "#fff", 
                    borderRadius: "10px"
                }
            }} className={isOpen ? 'fade-in' : ''}>
                <button className="close" onClick={onClose}  style={{ 
                    fontSize: '30px',
                     fontWeight: 'bold' ,
                     paddingRight:"25px",
                     marginTop:"25px"}}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <span style={{
                    fontSize: "25px",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "100px"
                }}>
                    Do You want to Delete {deleteId} ?</span>
                <div className="row d-flex justify-content-center p-3">
                    <div className="col-auto">
                        <button className="form-control btn btn-info" onClick={deleteIdSubmit} >Yes</button>
                    </div>
                    <div className="col-auto" style={{left:"-20px"}}>
                        <button className="form-control btn btn-outline-info" onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </Model>
        </div>
    )
}
