import { useParams } from "react-router-dom"
const Book = (books) => {
    const params =useParams()
   
    const book = books.books.find((book) => book.id === params.id)
    
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
                    <p>Link: button</p>
                </div>
                      
            </div>
        </div>
    )
}

export default Book