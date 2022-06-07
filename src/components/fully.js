import React from "react";
import screen from "../assets/screen02.png";
import "./headerstyle.css";

const Fully = (props) => {
  return (
    <div className="automated">
      <img src={screen} className="image"></img>
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
          }}
        >
          Automated Reports & Widget Alerts
        </p>
        <p style={{ fontSize: "13px", marginTop: "20px", textAlign: "left" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet.
        </p>
      </div>
    </div>
  );
};

export default Fully;
