import { useParams } from "react-router-dom"
import { ImAmazon } from "react-icons/im";
import { Link } from "react-router-dom";
const Book = (books) => {
    const params =useParams()
   
    const book = books.books.find((book) => book.id === params.id)
    console.log(book)
    return(
        <div className="linebr">        
            <div className="singlebContainer">                
                <p>{book?.Title}</p>
                <img src={book?.Cover}/>
                <p>By: {book?.Writer}</p>
                <p className="synopsis">{book?.Synopsis}</p>
                <p>What is being said:</p>
                <p className="review">{book?.Review}</p>
                
                <div className="bookInfoCont">
                    <p>Published by: {book?.Publisher}</p>
                    <p>Year: {book?.Year}</p>
                    <p>Genre: {book?.Genre}</p>
                    <p>Pages: {book?.Pages}</p>
                    
                    <a href={`${book?.Link}`} target="_blank"><ImAmazon /></a>
                    <Link to = {`${book?.Link}`}>Hey</Link>
                    
                </div>
                      
            </div>
        </div>
    )
}

export default Book