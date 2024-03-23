import { useState } from 'react';
import './App.css'
import TableForm from './component/Table'

function App() {
  const data = [
    { id: 1, name: 'RB', age: 25 },
    { id: 2, name: 'Jim', age: 20 },
  ];
  const [user,setUser] = useState(data);
  return (
    <div className="App">
      <TableForm userData={user}/>
    </div>
  )
}

export default App
