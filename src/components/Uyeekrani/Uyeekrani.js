import React from "react";


export default function Uyeekrani(props) {
    return ( <>
        <div className="uyeEkrani">

         <div className="element name" >
            <label>AD SOYAD   </label>
            <input type="text"placeholder="Lütfen adınızı ve soyadınızı giriniz"></input>
            <br></br> 
            <br></br> 

        
        </div>
        <div className="element Universite">
            <label>ÜNİVERSİTE  </label>
            <input type="text"placeholder="Lütfen üniversitenizi giriniz"></input>
            <br></br> 
            <br></br>

        
        </div>
        <div className="element mail">
            <label>MAİL       </label>
            <input type="email"placeholder="Lütfen mail adresinizi giriniz"></input>
            <br></br> 
            <br></br>
        
        </div>
        <div className="element numara">
            <label>NUMARA    </label>
            <input type="number" placeholder="Lütfen numaranızı giriniz"></input>
            <br></br> 
            <br></br>
        
        </div>
        <div className="element şifre">
            <label>ŞİFRE    </label>
            <input type="password"placeholder="Lütfen şifrenizi giriniz"></input>
            <br></br> 
            <br></br>
        
        </div>
        <div className="element kaydet">
         <button className="kaydet">Kaydet</button>
        
        </div>
        </div>

        </>
    );
}