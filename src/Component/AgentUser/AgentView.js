import React, { useState } from 'react'
import '../Admin/Css/AdminView.css';
import AgentDeleteAlert from './AgentDeleteAlert';
import AgentEdit from './AgentEdit';

export default function AgentView({ adminUserData }) {
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
    const [isEditModalOpen, setisEditModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [adminId, setadminId] = useState([]);
    const [updateAdmin, setupdateAdmin] = useState([]);
    const recordsPerPage = 5;



    //current postspage
    const indexOfLastPost = currentPage * recordsPerPage;
    const indexOfFirstPost = indexOfLastPost - recordsPerPage;
    const currentPosts = adminUserData.slice(indexOfFirstPost, indexOfLastPost);
    const npage = Math.ceil(adminUserData.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }

    const changeCPage = (id) => {
        setCurrentPage(id);
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr className='table-light'>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Language</th>
                        <th>Email ID</th>
                        <th>User Type</th>
                        <th>Privilege</th>
                        <th>Agent C</th>                        
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentPosts.length === 0 ? (
                            <tr>
                                <td colSpan={10} style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }}>No Records Found<br></br>
                                    <span style={{ fontSize: "15px", fontWeight: "lighter" }}>Press search to see all Data</span></td>
                            </tr>
                        ) : (
                            currentPosts.map((admin) => (
                                <tr key={admin.userId}>
                                    <td>{admin.userId}</td>
                                    <td>{admin.firstName} {admin.middleName} {admin.lastName}</td>
                                    <td>{admin.language}</td>
                                    <td>{admin.emailId}</td>
                                    <td>{admin.userType}</td>
                                    <td>{admin.privilege}</td>
                                    <td>{admin.agentCode}</td>
                                    <td>
                                        <button className="icon-button" onClick={() => {
                                            setisEditModalOpen(true);
                                            setupdateAdmin(admin);
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5" />
                                                <path fillRule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="icon-button" onClick={() => {
                                            setIsAddUserModalOpen(true);
                                            setadminId(admin.userId);
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )

                    }

                </tbody>
            </table>
            <hr></hr>
            <nav>
                <ul className='pagination'>
                    <li className='page-item'>
                        <span className='page-link' onClick={prePage} style={{ color: "black", border: "none" }}>
                            <span aria-hidden="true">&laquo;</span>
                        </span>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i} >
                                <span className='page-link' style={{ backgroundColor: currentPage === n ? '#17a2b8' : '', color: "black", border: "none" }} onClick={() => changeCPage(n)} >{n}</span>
                            </li>
                        ))
                    }
                    <li className='page-item'>
                        <span className='page-link' onClick={nextPage} style={{ color: "black", border: "none" }}>
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                    </li>
                </ul>
            </nav>

             <AgentDeleteAlert isOpen={isAddUserModalOpen} onClose={() => setIsAddUserModalOpen(false)} deleteId={adminId} />
             <AgentEdit isOpen={isEditModalOpen} onClose={() => setisEditModalOpen(false)} data={updateAdmin} />  
        </div>

    )
}
