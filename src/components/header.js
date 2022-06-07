import React from "react";
import logo from '../assets/Subtract.png';
import './headerstyle.css'

const Header = (props) => {
  return (
    <div className="header">
        <div style={{display:"flex",flexDirection:"row",alignItems:'center',width:"50%",justifyContent:'space-between'}}>
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
      </div>
      <div className="header_component">
        <li>Sign in</li>
        <div style={{
        }}>
        <p style={{margin:0,padding:"5px 23px",border:"0.5px solid #8794BA",  borderRadius:15,fontSize:11}}>Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
