import axios from 'axios';
import AdminAddUsers from './AdminAddUsers'
import { useState, useEffect } from 'react';
import AdminView from './AdminView';

export default function AdminGrid() {
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
    const [adminUserData, setAdminUserData] = useState([]);
    const [adminUserFilterData, setAdminUserFilterData] = useState([]);
    const [adminIdSearch, setAdminIdSearch] = useState("");
    const [regionSearch, setRegionSearch] = useState("");
    const [empNoSearch, setEmpNoSearch] = useState("");

    const adminIdHandleSearch = (e) => {
        setAdminIdSearch(e.target.value.toLowerCase());
    }
    const regionHandleSearch = (e) => {
        setRegionSearch(e.target.value.toLowerCase());
    }
    const empNoHandleSearch = (e) => {
        setEmpNoSearch(e.target.value.toLowerCase());
    }
    const handleSearch = () => {
        if (!adminIdSearch && !regionSearch && !empNoSearch) {
            setAdminUserFilterData(adminUserData);
        } else {
            const filteredData = adminUserData.filter((admin) =>
                admin.adminId.toLowerCase().includes(adminIdSearch) &&
                admin.region.toLowerCase().includes(regionSearch) &&
                admin.employeeNumber.toLowerCase().includes(empNoSearch)
            );
            setAdminUserFilterData(filteredData);
        }
        setAdminIdSearch("");
        setRegionSearch("");
        setEmpNoSearch("");
    }


    useEffect(() => {
        const REST_API_BASE_URL = 'http://localhost:8080/admin/';
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
                        <label>Admin Id</label>
                        <input type="text" className="form-control" value={adminIdSearch} onChange={adminIdHandleSearch} />
                    </div>
                    <div className="col-md-2">
                        <label>Region</label>
                        <input type="text" className="form-control" value={regionSearch} onChange={regionHandleSearch} />
                    </div>
                    <div className="col-md-2">
                        <label>Emp No</label>
                        <input type="text" className="form-control" value={empNoSearch} onChange={empNoHandleSearch} />
                    </div>
                    <div className="col-md-2 my-4" id="searchbtngrid" style={{ top: "7px", right: "20px" }}>
                        <button type="button" className="form-control btn btn-info" onClick={handleSearch}>Search</button>
                    </div>
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-2 my-4" style={{ top: "7px" }}>
                        <button type="button" className="form-control btn btn-outline-info" onClick={() => setIsAddUserModalOpen(true)}>+ Add Admin</button>
                    </div>
                </div>
            </form>
            <AdminView adminUserData={adminUserFilterData}/>
            <AdminAddUsers isOpen={isAddUserModalOpen} onClose={() => setIsAddUserModalOpen(false)}/>
        </div>
    )
}
