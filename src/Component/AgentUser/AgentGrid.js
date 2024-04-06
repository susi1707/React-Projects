import axios from 'axios';
import AgentAdd from './AgentAdd'
import { useState, useEffect } from 'react';
import AgentView from './AgentView';

export default function AdminGrid() {
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
    const [adminUserData, setAdminUserData] = useState([]);
    const [adminUserFilterData, setAdminUserFilterData] = useState([]);
    const [AgentIdSearch, setAgentIdSearch] = useState("");
    const [privilegeSearch, setPrivilegeSearch] = useState("");
    const [AgentCodeSearch, setAgentCodeSearch] = useState("");

    const agentIdHandleSearch = (e) => {
        setAgentIdSearch(e.target.value.toLowerCase());
    }
    const privilegeHandleSearch = (e) => {
        setPrivilegeSearch(e.target.value.toLowerCase());
    }
    const agentCodeHandleSearch = (e) => {
        setAgentCodeSearch(e.target.value.toLowerCase());
    }
    const handleSearch = () => {
        if (!AgentIdSearch && !privilegeSearch && !AgentCodeSearch) {
            setAdminUserFilterData(adminUserData);
        } else {
            const filteredData = adminUserData.filter((agent) =>
            agent.userId.toLowerCase().includes(AgentIdSearch) &&
            agent.privilege.toLowerCase().includes(privilegeSearch) &&
            agent.agentCode.toLowerCase().includes(AgentCodeSearch)
            );
            setAdminUserFilterData(filteredData);
        }
        setAgentIdSearch("");
        setPrivilegeSearch("");
        setAgentCodeSearch("");
    }


    useEffect(() => {
        const REST_API_BASE_URL = 'http://localhost:8080/agent/';
        axios.get(REST_API_BASE_URL)
            .then((response) => {
                setAdminUserData(response.data)
                setAdminUserFilterData(response.data);
            }).catch((e) => {
                console.error(e)
            })
    }, []);


    return (
        <div >
            <form >
                <div className="row p-1" style={{marginTop:"15px"}}>
                    <div className="col-md-2">
                        <label>Agent Id</label>
                        <input type="text" className="form-control" value={AgentIdSearch} onChange={agentIdHandleSearch} />
                    </div>
                    <div className="col-md-2">
                        <label>Privilege</label>
                        <input type="text" className="form-control" value={privilegeSearch} onChange={privilegeHandleSearch} />
                    </div>
                    <div className="col-md-2">
                        <label>Agent Code</label>
                        <input type="text" className="form-control" value={AgentCodeSearch} onChange={agentCodeHandleSearch} />
                    </div>
                    <div className="col-md-2 my-4" id="searchbtngrid" style={{ top: "7px", right: "20px" }}>
                        <button type="button" className="form-control btn btn-info" onClick={handleSearch}>Search</button>
                    </div>
                        <div className="col-sm-2">
                    </div>
                    <div className="col-sm-2 my-4" style={{ top: "7px" }}>
                        <button type="button" className="form-control btn btn-outline-info" onClick={() => setIsAddUserModalOpen(true)}>+ Add Agent User</button>
                    </div>
                </div>
            </form>
             <AgentView adminUserData={adminUserFilterData}/>
            <AgentAdd isOpen={isAddUserModalOpen} onClose={() => setIsAddUserModalOpen(false)}/>  
        </div>
    )
}
