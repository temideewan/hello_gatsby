import React from "react"
import {Link} from 'gatsby';
import Header from '../components/Header';
import Web from '../components/layout';

export default function Home() {
  return (
  <div style={{color:'#000123',}}>
   <Web>
   <Link to='/contact/'>Contact us</Link>
    <Header headerText='Hello Gatsby is here!'/>
    <p>First thing in gatsby</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" width={350} height={200}/>
   </Web>
  </div>)
}
