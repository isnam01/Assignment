import React from "react";
import logo from "../assets/Subtract.png";
import "./headerstyle.css";

const Cards = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <p style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Starter
        </p>
        <p style={{ padding: "15px 0px", borderBottom: "0.5px solid" }}>
          up to 3 users
        </p>
        <div style={{ display: "flex" ,marginTop:"20px",justifyContent:'center',alignItems:"baseline"}}>
          <p style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>$</p>
          <p style={{ color: "white", fontWeight: "bold", fontSize: 32 }}>29</p>
        </div>
        <p>per month</p>
        <p style={{
            border:"1px solid",
            borderRadius:"15px",
            padding:"6px 15px",
            margin:"20px 10px",
        }}>Order</p>
      </div>
      <div className="card">
        <p style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Standard
        </p>
        <p style={{ padding: "15px 0px", borderBottom: "0.5px solid" }}>
          up to 20 users
        </p>
        <div style={{ display: "flex" ,marginTop:"20px",justifyContent:'center',alignItems:"baseline"}}>
          <p style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>$</p>
          <p style={{ color: "white", fontWeight: "bold", fontSize: 32 }}>99</p>
        </div>
        <p>per month</p>
        <p style={{
            border:"1px solid",
            borderRadius:"15px",
            padding:"6px 15px",
            margin:"20px 10px",
        }}>Order</p>
      </div>
      <div className="card">
        <p style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Premium
        </p>
        <p style={{ padding: "15px 0px", borderBottom: "0.5px solid" }}>
          up to 200 users
        </p>
        <div style={{ display: "flex" ,marginTop:"20px",justifyContent:'center',alignItems:"baseline"}}>
          <p style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>$</p>
          <p style={{ color: "white", fontWeight: "bold", fontSize: 32 }}>299</p>
        </div>
        <p>per month</p>
        <p style={{
            border:"1px solid",
            borderRadius:"15px",
            padding:"6px 15px",
            margin:"20px 10px",
        }}>Order</p>
      </div>
    </div>
  );
};

export default Cards;
