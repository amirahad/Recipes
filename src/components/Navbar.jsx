import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
          <Link to="/" className='brand'>
            <h1>RECIPES</h1>
          </Link>
          <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}
