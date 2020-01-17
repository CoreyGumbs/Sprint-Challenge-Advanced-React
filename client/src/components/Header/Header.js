import React from 'react';
import HeaderSearchForm  from './HeaderSearchForm';

const Header = ({handlePlayerName}) => {
    return(
       <div className='headerBar' data-testid="header">
           <div className="logo">
               Women's World Cup Players
           </div>
           <div className="search-form-container">
               <HeaderSearchForm handlePlayerName={handlePlayerName} />
           </div>
           <div className="">
               <a href="/">Reset</a>
           </div>
       </div>
    )
}

export default Header;