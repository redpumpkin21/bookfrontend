import { Link } from "react-router-dom"
import SearchBar from "../Components/searchbar"
const Books = (props) => {
    

    return (
    <div>
        {/* <SearchBar /> */}
        <div className="container">
      {props.filteredBooks.map((books, index) => (
        <div className = 'bookContainer'>
            <div className="wordContainer">
          <p>{books.Title}</p>
          <p>By: {books.Writer}</p>
          </div>
          <Link to = {`/${books?.id}`}>
          <img src={books.Cover} className="cover"/>
          </Link>
        </div>
        ))}
      </div>
    </div>
      
    )
}

export default Books