import React from 'react';
import '../styles/global.css'
import Orbs from './Orbs';

const Web = ({children}) => {
    return ( 
        <div id='app'>
            <Orbs num={1}/>
            <Orbs num={2}/>
            <Orbs num={3}/>
            <Orbs num={4}/>
            <div className="container">
            {children}
            </div>
        </div>
     );
}
 
export default Web;