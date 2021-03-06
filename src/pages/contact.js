import React from 'react';
import Header from '../components/Header';
import {Link} from 'gatsby';
import Web from '../components/layout';

export default function Contact(){
    return(
        <Web>
            <div>
            <Header headerText='Welcome to the contact page'/>
            <h3>Here is howyou can get in contact with us</h3>
            <p>You could do a phone number found in our <Link to='/about/'>about page</Link></p>
        </div>
        </Web>
    )
}