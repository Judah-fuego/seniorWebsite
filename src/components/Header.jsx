import React from 'react';

import {Link} from "react-router-dom";
import {Button } from "@/components/ui/button";

import BackToTop from '@/components/TopButton'

function Header(props){

  return (
  <>
  <div>
    <ul className=" mt-5 text-xl md:3xl flex gap-x-10 justify-center">
      <li><Link to="/seniorWebsite/mainpage"><Button>Home</Button></Link></li>
      <li><Link to="/seniorWebsite/aboutus"><Button>About Us</Button></Link></li> 
      <li><Link to="/seniorWebsite/popeyeszone"><Button className='bg-orange-500 hover:bg-orange-600'>Popeyes Zone</Button></Link></li>  
    </ul>
  </div>
  
    {props.children}
    <BackToTop/>
    
  </>)
}

export default Header;