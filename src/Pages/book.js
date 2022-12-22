import { useParams } from "react-router-dom"
const Book = (books) => {
    const params =useParams()
   
    const book = books.books.find((book) => book.id === params.id)
    
    return(
        <div className="linebr">        
            <div className="singlebContaine">
                <p>single book goes here</p>
                <p>{book?.Title}</p>
                <img src={book?.Cover}/>
                <p>By: {book?.Writer}</p>
                <p>{book?.Synopsis}</p>
                <p>{book?.Year}</p>       
            </div>
        </div>
    )
}

export default Book