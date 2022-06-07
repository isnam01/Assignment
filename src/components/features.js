import React from "react";
import logo from "../assets/Subtract.png";
import "./headerstyle.css";
import computer from "../assets/computer.svg";
import clock from "../assets/clock.svg";
import rocket from "../assets/rocket.svg";

const Feature = (props) => {
  return (
    <div className="feature">
      <p
        style={{
          color: "#172755",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        Main Features
      </p>
      <p
        style={{
          color: "#8794BA",
          fontSize: "16px",
          textAlign: "center",
          marginTop: "2%",
          lineHeight: "24px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
        aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh
        nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
        pulvinar sit amet. Id vel in nam malesuada.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop:"40px",
          flexWrap:'wrap',
          alignContent:'center',
          alignItems:"center"
        }}
      >
        <div style={{ maxWidth: "280px" ,marginTop:"15px"}}>
          <img src={computer} height={40} width={40}></img>
          <p style={{color:"black",fontWeight:"bold",margin:"10px 0px"}}>Monitoring 24/7</p>
          <p style={{lineHeight:"18px"}}>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>
        <div style={{ maxWidth: "280px" ,marginTop:"15px"}}>
          <img src={clock} height={40} width={40}></img>
          <p style={{color:"black",fontWeight:"bold",margin:"10px 0px"}}>Widget System</p>
          <p style={{lineHeight:"18px"}}>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>
        <div style={{ maxWidth: "280px" ,marginTop:"15px"}}>
          <img src={rocket} height={40} width={40}></img>
          <p style={{color:"black",fontWeight:"bold",margin:"10px 0px"}}>Widget System</p>
          <p style={{lineHeight:"18px"}}>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
