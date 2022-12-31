import { useState, useRef } from 'react'

// Styles 
import "./styles.css"

// Components
import Secret from './Secret.js'
import Card from './Components/Card.js'

// Utils
import { things } from './utils/things.js'

console.log(process.env.REACT_APP_CLAIRE_KEY)
export default function App() {
    const [ isAuthenticated, setAuthenticated ] = useState(localStorage.getItem('claire_authenticated') ?? false)
    const secretRef = useRef()

    const trySecret = (secret) => {
        if (secretRef.current.value === process.env.REACT_APP_CLAIRE_KEY) {
            setAuthenticated(true)
            localStorage.setItem('claire_authenticated', true)
        } else {
            console.log('no')
        }
    }
	return (<>
        { !isAuthenticated ?
            <div>
                <p>Are you Claire?</p>
                <input ref={ secretRef }></input>
                <button onClick={ trySecret }>Secret</button>
            </div>
        : <Secret /> }
	</>)
}