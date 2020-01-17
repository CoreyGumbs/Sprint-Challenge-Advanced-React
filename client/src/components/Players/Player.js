import React from 'react';

const Player = ({player}) => {
    return(
        <div className="player-container">
            <h2 className="player-name">
                {player.name}
            </h2>
            <p className="player-country">
                {player.country}
            </p>
            <p className="player-searches">
               No. Of Searches For Player: {player.searches}
            </p>
        </div>
    )
}

export default Player;