import { Link } from "react-router-dom"
const Books = (books) => {
    

    return (
        <div className="container">
      {books.books.map((books) => (
        <div className = 'bookContainer'>
          <p>{books.Title}</p>
          <Link to = {`/${books?.id}`}>
          <img src={books.Cover} className="cover"/>
          </Link>
        </div>
        ))}
      </div>
      
    )
}

export default Books