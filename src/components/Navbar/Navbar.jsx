import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>Algo-Vis</div>
        <div className='nav-menu'>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='nav-contact'>Contact</li>
        </div>
    </div>
  )
}

export default Navbar
