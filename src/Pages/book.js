import { useParams } from "react-router-dom"
const Book = (books) => {
    const params =useParams()
   
    const book = books.books.find((book) => book.id === params.id)
    
    return(
        <div>
        <p>single book goes here</p>
        <p>{book?.Title}</p>
        <img src={book?.Cover}/>
       
        </div>
    )
}

export default Book