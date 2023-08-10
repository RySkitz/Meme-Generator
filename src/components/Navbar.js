import React from "react"

export default function Navbar(){
    return (
        <>
            <nav className="Navbar">
                <div className="Navbar--Logo">
                    <img src="images/TrollFace.png"/>
                    <h1 className="Navbar--Logo__Text">Meme Generator</h1>
                </div>
                <h2 className="Navbar--Project">React Course - Project 3</h2>
            </nav>
        </>
    )
}