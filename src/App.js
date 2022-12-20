import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const url = "https://real-rose-nightingale-cap.cyclic.app/"
  const [books, setBooks] = useState([])

  const getBooks = async() => {
    const response = await fetch(url)
    const data = await response.json()
    setBooks(data)
    console.log(data)
  }
  console.log(getBooks)
  useEffect (() => {getBooks()}, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
