import React from "react"
import {Link} from 'gatsby';
import Header from '../components/header';

export default function Home() {
  return (<div style={{color:'#000123',}}>
    <Link to='/contact/'>Contact us</Link>
    <Header headerText='Hello Gatsby is here!'/>
    <p>First thing in gatsby</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>)
}
