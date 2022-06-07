import React from "react";
import logo from "../assets/Subtract.png";
import "./headerstyle.css";

const FooterContent = (props) => {
  return (
    <div className="footer_content">
      <div style={{alignSelf:'center',}}>
        <p
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "34px",
          }}
        >
         Pricing Plans
        </p>
        <p
          style={{
            color: "#8794BA",
            fontSize: "13px",
            margin: "20px 0px",
            lineHeight: "18px",
            width:"400px"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est.
        </p>
      </div>
    </div>
  );
};

export default FooterContent;
