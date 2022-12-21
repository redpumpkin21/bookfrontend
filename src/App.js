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
          Cover: book.Cover,
          Publisher: book.Publisher,
          Genre: book.Genre,
          Year: book.Year,
          Review: book.Review,
          Pages: book.Pages

        }
      })
      setBooks(trying)

  }
  
  useEffect (() => {getBooks()}, [])
 
  const{search} = window.location
  const query = new URLSearchParams(search).get('s')
  const filterBooks = (book, query) => {
      if(!query) {
        return book
      }
      return book.filter((book) => {
        const bookTitle = book.Title.toLowerCase()
        
        return(
          bookTitle.includes(query.toLowerCase())
        ) 
      })
  }

  const filteredBooks = filterBooks(books, query)

  return (
    <div className="App">
      
      <Routes>

      
      <Route path = "/" element={<Books books={books}
        filteredBooks = { filteredBooks }
      />}></Route>

      <Route path = "/:id" element = {<Book books={books}       
      />}></Route>
      </Routes>
    </div>
  );
}

export default App;
