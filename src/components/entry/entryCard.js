import React from "react";
import "./entry.css";
export default function Entry(props) {
    return (
        <>
            <code>
                <div className="entryCard">
                    <h3>{props.entryCategory}</h3>
                    <label for="enty"><b>{props.entryName}</b> </label>
                </div>
            </code>
        </>
    );
}