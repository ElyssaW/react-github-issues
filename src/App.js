import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  useEffect(() => {
    axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
    .then(res => {
      console.log(res.data)
    })
  }, [])
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
