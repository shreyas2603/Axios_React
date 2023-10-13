import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setItems(response.data.users);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Dummy Data</h1>
      <div className="container">
        <Table items={items} />
      </div>
    </div>
  );
}

export default App;
