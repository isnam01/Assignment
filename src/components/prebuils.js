import React from "react";
import screen from "../assets/screen01.png";
import "./headerstyle.css";

const Automated = (props) => {
  return (
    <div className="automated">
      <div
        style={{
          maxWidth: "450px",
          paddingTop: "30px",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: "25px",
            marginLeft: "-15px",
            width: "80%",
          }}
        >
          Pre-built Dashboard Templates
        </p>
        <p style={{ fontSize: "13px", marginTop: "20px", textAlign: "left" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet.
        </p>
      </div>
      <img src={screen} className="image"></img>
    </div>
  );
};

export default Automated;
