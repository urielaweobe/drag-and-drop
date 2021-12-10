import React, { useState, useEffect } from 'react'

const Home = () => {


    // hooks
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [])
    
    const calculateTimeLeft = () => {

        let year = new Date().getFullYear();

        const difference = +new Date(`12/31/${year}`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;

    };

    // states
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());

    // custom funtions
    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        )
    })

    return (
        <>

            <div className="container">

                <div className='row'>
                    
                    <div className='ui-text-center mx-auto'>

                        <h1>Road to 2022!</h1>
                        <h2>New year celebration!</h2>
                        {timerComponents.length ? timerComponents : <span>Happy New Year {year}!</span>}

                    </div>
                    
                </div>

            </div>
            
        </>
    )
}

export default Home
