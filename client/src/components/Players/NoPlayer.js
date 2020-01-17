import React from 'react';


const NoPlayer = () => {
    return(
        <div className="no-player-container">
            <h1 className="no-player-heading">
                No Player Found.
            </h1>
            <a href="/" className="no-player-refresh-link">Home</a>
        </div>
    )
}

export default NoPlayer;