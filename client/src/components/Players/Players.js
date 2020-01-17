import React from 'react';
import Player from './Player';

const Players = ({data}) =>{
    return(
        <div className='players-container'data-testid='Players'>
            {data.map((player, idx) => (
                <div key={idx} data-testid='player-name'>
                    <Player player={player} />
                </div>
            ))}
        </div>
    );
}

export default Players;