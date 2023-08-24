import { useEffect, useContext } from "react"
import ContextPage from '../ContextPage'
import Card from "./Card"
import PageBtn from "./PageBtn"

function BeerContainer() {

    const { beers, getAllBeers } = useContext(ContextPage)

    useEffect(() => {
        getAllBeers()
    }, [])

    const cardElement = beers.map((beer) => (
        <Card key={beer.id} beer={beer} />
    ))


  return (
    <div className="beer-container">
      <div className="card-container">{cardElement}</div>
      <PageBtn />
    </div>
  );
}

export default BeerContainer