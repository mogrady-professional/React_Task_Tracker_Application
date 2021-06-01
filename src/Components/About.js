import logo from '../../src/logo.svg';
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h2>I ❤️  React</h2>
            <h4>Version 1.0.0</h4>
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About
