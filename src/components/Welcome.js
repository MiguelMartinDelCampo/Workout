import React from 'react'

const welcome = ({username}) => (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {username}!</h1>
                <p>Lets workout to get someone gains</p>
            </div>
        </div>
    )

export default welcome