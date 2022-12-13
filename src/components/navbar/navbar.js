import React from "react";
import Resim from "../img/desislogo.jpeg"
import Resima from "../img/uyeLogo.jpeg"
import "./navbar.css"
export default function navbar() {
    return (
        <>
        <div className="navbar">
                 
            <img className="logoImg" alt="" src={Resim} height="100"/>
            <h1> <center>DESİS</center></h1> 
            <div className="uyeGiris">
            <button className="buton"><img alt="" src={Resima} height={50}/></button>
            </div>

        </div>
        </>
    );
}