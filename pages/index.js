// pages/index.js

import React, { useState, useEffect } from 'react';
import Btn from '../components/Btn';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api/data');
    const result = await response.json();
    setData(result);
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <Btn />
      <Btn />
      <Btn />
      <Btn />
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - {item.amount} - {item.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
