import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <p>Egg Warmers</p>

            <Link to='/' className='navLinks'>Home</Link>
            <Link to='/ourstory' className='navLinks'>Our Story</Link>
            <Link to='/productoverview' className='navLinks'>Our Products</Link>

        </nav>
    )
}

export default Navbar
