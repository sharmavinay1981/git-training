import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div style={{ backgroundColor: "black", color: "white",width: "100%", height: "100px" }}>
     
     <a href="/terms">Terms and Conditions</a>
     <a href="/privacy">Privacy Policy</a>

    </div>
  );
}
