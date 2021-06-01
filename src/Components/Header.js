// Can be a Class or a Function

// Extension - ES7 React/Redux/GraphQL/React-Native snippets allows the following shortcuts:
// rcc creates a Class based component
// rce creates a Classs based component but exports down at the bottom

// rafce - clean arrow function that exports down at the bottom.

// ALL THESE CAN BE FOUND ON https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets or just in the extension information in VS.

// Boiler plate arrow function component - rafce



// Used to be required to import every component for react, but we don't need this so can be commented out
// import React from 'react'

// IMPT - to import prop types
import PropTypes from 'prop-types'
import Button from './Button'

// Hide button functionality based on useLocation
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log('Click')
    // }
    // Hide button functionality based on useLocation
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* Reusable component! */}
            {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />)}
            {/* <Button color='red' text='Hello 1' /> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS IN JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header

// Navigate to App.js and Import Header
