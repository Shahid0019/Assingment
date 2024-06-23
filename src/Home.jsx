import React, { useEffect, useState } from 'react';
const url = 'https://jsonplaceholder.typicode.com/users';
import './index.css';

function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const removeItem = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const addUser = () => {
    if(name && username && city){
      const newUser = {
        id: Math.random(),
        name: name,
        username: username,
        address: {city:city},
      };
      setUsers([...users, newUser]);
      setName('');
      setUsername('');
      setCity('');
    }else{
      alert('Please Enter the Details')
    }
    
  };

  return (
    <>
      

      <div style={{ padding: '2rem' }}>
        <input
          className='search-bar'
          type='text'
          placeholder='Search UserName'
          onChange={(e) => setSearch(e.target.value)}
        />
        <h4>Add User</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          className='form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='name'
        />
      </div>
      <div className='form-row'>
        <label htmlFor='username' className='form-label'>
          Username
        </label>
        <input
          type='text'
          className='form-input'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id='username'
        />
      </div>
      <div className='form-row'>
        <label htmlFor='city' className='form-label'>
          City
        </label>
        <input
          type='text'
          className='form-input'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          id='city'
        />
      </div>
      <button  type='button' className='btn btn-block' onClick={addUser}>
        Add
      </button>
        <table style={{ borderCollapse: 'collapse', width: '80%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) =>
                search.toLowerCase() === ''
                  ? true
                  : user.username.toLowerCase().includes(search.toLowerCase())
              )
              .map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.address.city}</td>
                  <td>
                    <button onClick={() => removeItem(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <button style={{ marginTop: '1rem' }} onClick={() => setUsers([])}>
          Remove All
        </button>
      </div>
    </>
  );
}

export default Home;
