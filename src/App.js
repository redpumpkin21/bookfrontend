import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useMatch, useParams } from 'react-router-dom';
import Books from './Pages/books';
import Book from './Pages/book';
function App() {
  const url = "https://real-rose-nightingale-cap.cyclic.app/"
  const [books, setBooks] = useState([])
 
  const params = useParams()
  const getBooks = async() => {
    
      const response = await fetch(url)
      const data = await response.json()      
      const trying = data.map((book, index) => {
        return{
          Title: book.Title,
          Author: book.Author,
          Synopsis: book.Synopsis,
          id: book._id,
          Cover: book.Cover
        }
      })
      setBooks(trying)

  }
  
  useEffect (() => {getBooks()}, [])
 


  return (
    <div className="App">
      
      <Routes>

      
      <Route path = "/" element={<Books books={books}/>}></Route>

      <Route path = "/:id" element = {<Book books={books}       
      />}></Route>
      </Routes>
    </div>
  );
}

export default App;
