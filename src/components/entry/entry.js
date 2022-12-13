import React from "react";
import "./entry.css";
export default function Entry(props) {
    return (
        <>
            <code>
        <div className="entry">
            <h3>Lütfen aşağıdaki bilgileri doldurunuz</h3>
            <label for="enty"><b>Entry giriniz:</b> </label>
            <input type="text" id="myText" />
            <br/>
            <label></label>
            <label for="categories"><b>Kategori giriniz:</b></label>
            <input type="radio" id="akademi" name="slm" value="Akademi"/>
            <label for="akademi">Akademisyen</label>
            <input type="radio" id="ders" name="slm" value="Ders"/>
            <label for="ders">Ders</label>
            <br/>
                <button onClick="myFunction()">Kaydet</button>

               <p id="demo"></p>

        </div>
            </code>
        </>
    );
}