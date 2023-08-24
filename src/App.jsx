import { BeerProvider } from './ContextPage'
import './App.css'
import Navbar from './components/Navbar'
import BeerContainer from './components/BeerContainer'

function App() {

  return (
    <BeerProvider>
      <Navbar />
      <BeerContainer />
    </BeerProvider>
  )
}

export default App
