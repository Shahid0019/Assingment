import React, { useEffect, useState } from 'react'
const url = 'https://jsonplaceholder.typicode.com/users'
import './index.css';
function Home() {
    const [users , setUsers ] = useState([])
    const [search, setSearch ] =useState('')
useEffect(()=>{
    const fetchData = async() =>{
   try{
    const response = await fetch(url)
    const users = await response.json()
    // console.log(users)
    setUsers(users);
   }catch(error){
    console.log(error)
   }
}  
fetchData()
},[])
const removeItem = (id)=>{
const updateUsers = users.filter((person) =>person.id !==id)
setUsers(updateUsers)
}
return (
  <>
  <nav></nav>
  <div style={{padding:"2rem"}}>
    <input className="search-bar" type="text"  placeholder='Search UserName' onChange={(e) => setSearch(e.target.value)}/>
    <table style={{ borderCollapse: 'collapse', width: '80%' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.filter((user) =>{
         return search.toLocaleLowerCase() === '' ? user 
         : user.username.toLocaleLowerCase().includes(search)

        }).map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => removeItem(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button style={{marginTop:'1rem'}} onClick={() =>setUsers([])}>Remove All</button>
    </div>
    </>
);
}

export default Home
