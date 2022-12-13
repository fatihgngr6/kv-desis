import React from "react";
import resim from "../img/desislogo.jpeg"
import resima from "../img/uyeLogo.jpeg"
import "./navbar.css"
export default function navbar() {
    return (
        <>
        <div className="navbar">
                 
            <img alt="" src={resim} height="100"/> 
            <h1> <center>DESİS</center></h1> 
            <div className="uyeGiris">
            <button className="buton"><img alt="" src={resima} height={50}/></button>
            </div>
                
                
                
                 

        </div></>
    );
}