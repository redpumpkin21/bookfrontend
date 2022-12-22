
const SearchBar = () => {
    return(
    <form action="/" method = "get" className="searcher">
        {/* <label htmlFor="header-search">
            <span className="visuallyHidden"> Search Here</span>
        </label> */}
        <input  type = "text" id="header-search" placeholder="Search for Books" name="s"/>
        <button type="submit" className="searchButton">Search</button>
    </form>
    )
}

export default SearchBar