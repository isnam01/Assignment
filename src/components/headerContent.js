import React from "react";
import logo from "../assets/Subtract.png";
import "./headerstyle.css";

const HedaerContent = (props) => {
  return (
    <div className="content">
      <p
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "34px",
          textAlign: "left",
        }}
      >
        Monitor your business on real-time dashboard
      </p>
      <p
        style={{
          color: "#8794BA",
          fontSize: "11px",
          textAlign: "justify",
          margin: "20px 0px",
          lineHeight: "18px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
        aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh
        nunc mattis imperdiet sed nullam.
      </p>
      <div
        style={{
          display: "flex",
        }}
      >
        <button
          style={{
            backgroundColor: "#EF2A82",
            borderRadius: "18px",
            color: "white",
            padding: "10px 40px",
            border: "none",
            fontSize: "10px",
            marginTop:"10px"
          }}
        >
          Try for Free
        </button>
      </div>
    </div>
  );
};

export default HedaerContent;
