import { useState } from 'react'
import './App.css'
import TableForm from './component/Table'
import AddUsers from './component/AddUsers'

function App() {
  const data = [
    { id: 1, name: 'RB', age: 25 },
    { id: 2, name: 'Jim', age: 20 },
  ]
  const [user, setUser] = useState(data);
  const adduser=(newUser)=>{
    newUser.id=user.length +1;
    setUser([...user,newUser]);
  }
  return (
    <div className="App">
      <TableForm userData={user} />
      <AddUsers addingUser={adduser}/>
    </div>
  )
}

export default App
