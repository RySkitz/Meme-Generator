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

    const [memeImage, setMemeImage] = useState('')

    function getMemeImage(){
        const memesArray = memesData.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = (memesArray[randomNumber].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    const [aboveText, setAboveText] = useState("")
    const [belowText, setBelowText] = useState("")

    function changeAboveText(event){
        setAboveText(event.target.value)
    }
    function changeBelowText(event){
        setBelowText(event.target.value)
    }

    return(
        <> 
            <div className="Position">
                <div className="Container">
                    <div className="Input">
                        <input className="Input-Top" placeholder="Text Above" onChange={changeAboveText}/>
                        <input className="Input-Bottom" placeholder="Text Below" onChange={changeBelowText}/>
                        <button className="Generate-Button" onClick={getMemeImage}>Get a new meme image</button>                        
                    </div>
                    <div className="Image">
                        <img src={meme.randomImage} alt="meme" className="Image--Meme"/>
                        <p className="Text-Above">{aboveText}</p>
                        <p className="Text-Below">{belowText}</p>
                    </div> 
                </div>
            </div>
        </>
    )
}