import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="mx-auto mrgt5">
                        <Link to="/drag-and-drop">Drag and Drop</Link>
                        <Link to="/countdown-timer" className='ml-5'>Countdown Timer</Link>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home
