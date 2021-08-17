import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <h3>The Naked Egg</h3>

            <Link to='/' className='navLinks'>Home</Link>
            <Link to='/ourstory' className='navLinks'>Our Story</Link>
            <Link to='/productoverview' className='navLinks'>Our Products</Link>
            <Link to='/cart' className='navLinks'>Cart</Link>

        </nav>
    )
}

export default Navbar
