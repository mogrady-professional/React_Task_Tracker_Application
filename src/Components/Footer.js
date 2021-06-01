import { Link } from 'react-router-dom'
// Hide About link when on the About Page
import { useLocation } from 'react-router-dom'

const Footer = () => {
    // Hide About link when on the About Page
    const location = useLocation()
    return (
        <footer>
            <p>Copyright <a href="http://www.michaelogrady.net">Michael O'Grady</a> &copy; 2021</p>
            {/* Hide About link when on the About Page */}
            {location.pathname !== '/about' && (<Link to="/about">About</Link>)}
        </footer>
    )
}

export default Footer
