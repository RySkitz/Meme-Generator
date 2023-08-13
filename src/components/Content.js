import React from "react"
import {useState} from "react"
import memesData from "./memesData"

export default function Content(){
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '', 
        randomImage: 'https://i.imgflip.com/1ihzfe.jpg'
    })

    const [allMemeImages, setAllMemesImages] = useState(memesData)

    function handleChange(event){
        const {name, value} = event.target 
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMemeImage(){
        const memesArray = memesData.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = (memesArray[randomNumber].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <> 
            <div className="Position">
                <div className="Container">
                    <div className="Input">
                        <input 
                            className="Input-Top" 
                            placeholder="Text Above"
                            name="topText"
                            value={meme.topText}
                            onChange={handleChange}
                        />
                        <input 
                            className="Input-Bottom" 
                            placeholder="Text Below"
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={handleChange}
                        />
                        <button className="Generate-Button" onClick={getMemeImage}>Get a new meme image</button>                        
                    </div>
                    <div className="Image">
                        <img src={meme.randomImage} alt="meme" className="Image--Meme"/>
                        <p className="Text-Above">{meme.topText}</p>
                        <p className="Text-Below">{meme.bottomText}</p>
                    </div> 
                </div>
            </div>
        </>
    )
}