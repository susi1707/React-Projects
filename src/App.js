import './App.css';
import AdminGrid from './Component/Admin/AdminGrid';
import AgentGrid from './Component/AgentUser/AgentGrid';
import Header from './Component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <div className="card mb-3" id='admincardgrid'>
        <div className="card-header">User Managment</div>
        <div className="card-body">
          <Router>
            <Header/>
            <Routes>
            <Route path="/" element={<AdminGrid />} />
              <Route path="/admin" element={<AdminGrid />} />
              <Route path="/agent" element={<AgentGrid />}/>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
