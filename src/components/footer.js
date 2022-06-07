import React from "react";
import logo from '../assets/Subtractwhite.png';
import fb from '../assets/Facebook.png';
import tw from '../assets/Twitter.png';
import insta from '../assets/Instagram.png';
import './headerstyle.css'

const Footer = (props) => {
  return (
    <div className="header" style={{justifyContent:'space-between'}}>
      <div style={{display:"flex",flexDirection:"row",alignItems:'center'}}>
        <img src={logo} height={25} width={25}></img>
        <p style={{color:"white",fontWeight:'bold',marginLeft:7}}>ANALYTICS</p>
      </div>
      <div className="header_component">
        <li>Products</li>
        <li>Pricing</li>
        <li>FAQ</li>
        <li>Blog</li>
        <li>Blog</li>
      </div>
      <div >
      <img src={fb}   style={{margin:"0px 10px"}} width={6} ></img>
      <img src={tw} style={{margin:"0px 10px"}} width={12} ></img>
      <img src={insta} style={{margin:"0px 10px"}} width={12} ></img>
      </div>
    </div>
  );
};

export default Footer;
