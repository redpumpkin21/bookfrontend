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
                <p>Published in: {book?.Year}</p>       
            </div>
        </div>
    )
}

export default Book