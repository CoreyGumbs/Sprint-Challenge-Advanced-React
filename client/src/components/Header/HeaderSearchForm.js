import React from 'react';
import {useInput} from '../../hooks/Hooks';

const HeaderSearchForm = ({handlePlayerName}) => {
    const [playerName, setPlayerName, handleChanges] = useInput('');

    const handleSubmit = e => {
        e.preventDefault();
        handlePlayerName(playerName);
        setPlayerName('');
    }
    return(
        <div className="header-search-form-container">
            <form  className="search-form" onSubmit={handleSubmit}>
                <label htmlFor="">Search For Player: </label>
                <input type="text" name='playerName' className="player-input" value={playerName} onChange={e => handleChanges(e.target.value)} required/>
                <button type="submit">Go!</button>
            </form>
        </div>
    )
}

export default HeaderSearchForm;