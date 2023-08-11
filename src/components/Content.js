import React from "react"

export default function Content(){
    return(
        <> 
            <div className="Position">
                <div className="Container">
                    <div className="Input">
                        <input className="Input-Top" placeholder="Text Above"/>
                        <input className="Input-Bottom" placeholder="Text Below"/>
                        <button className="Generate-Button">Get a new meme image</button>                        
                    </div>
                    <div className="Image">
                        <img src="/images/memeimg.png" alt="meme"/>
                    </div>
                </div>
            </div>
        </>
    )
}