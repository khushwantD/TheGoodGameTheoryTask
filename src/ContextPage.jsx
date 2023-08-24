import { createContext, useState } from "react";
import axios from 'axios'

const ContextPage = createContext('')

export const BeerProvider = ({ children }) => {
    const [ beers, setBeers ] = useState([])
    const [ page, setPage ] = useState(1)

    if(page < 1) {
        setPage(1)
    }

    const getAllBeers = async () => {
        const res = await axios.get("https://api.punkapi.com/v2/beers");
        const allBeers = res.data
        setBeers(allBeers)
    }

    const fetchSearch = async (query) => {
        const res = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${query}`);
        const searchedBeer = await res.data
        setBeers(searchedBeer)
    }

    const getBeerNextPage = async () => {
        const res = await axios.get(
          `https://api.punkapi.com/v2/beers?page=${page}&per_page=20`
        );
        const getBeer = res.data
        setBeers(getBeer)
    }

    return (
      <ContextPage.Provider
        value={{
          beers,
          setBeers,
          getAllBeers,
          page,
          setPage,
          fetchSearch,
          getBeerNextPage,
        }}
      >
        {children}
      </ContextPage.Provider>
    );

}

export default ContextPage;