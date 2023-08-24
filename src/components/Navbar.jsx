import { useState, useContext } from "react"
import ContextPage from '../ContextPage'

function Navbar() {

    const { fetchSearch, getAllBeers } = useContext(ContextPage)

    const [ value, setValue ] = useState('')

    const searchBeer = () => {
        const query = value.trim()

        if(query === '') {
            getAllBeers()
        } else {
            fetchSearch(query)
        }
        setValue('')
    }

  return (
    <div className="navbar">
      <a href="" className="logo" onClick={getAllBeers}>
        <h3 className="logo">Beers.com</h3>
      </a>
      <div className="search-container">
        <input
          type="search"
          name="searchPanel"
          placeholder="search Beer"
          className="searchPanel"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn" onClick={searchBeer}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Navbar