import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Card from './Components/PokemonCards.jsx'

function App() {

  return (
    
      <BrowserRouter>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <Link className="navbar-brand" to="/">PokeProject</Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Info</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/card">Card</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contatti</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<h1>Info</h1>} />
          <Route path='/card' element={<Card />} />
          <Route path='/contact' element={<h1>Contatti</h1>} />
        </Routes>

      </BrowserRouter>
  )
}

export default App