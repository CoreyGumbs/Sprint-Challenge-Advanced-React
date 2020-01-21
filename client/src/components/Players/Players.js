import React from 'react';
import Player from './Player';
import NoPlayer from './NoPlayer';

const Players = ({data, noPlayer}) =>{
    return(
        <div className='players-container'data-testid='Players'>
            { noPlayer ? <NoPlayer /> : data.map((player, idx) => (
                <div key={idx} data-testid='player-name'>
                    <Player player={player} />
                </div>
            ))}
        </div>
    );
}

export default Players;