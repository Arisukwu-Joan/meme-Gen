import React, { useState } from "react";
import Gallery from "../Gallery";

function Form() {
  const [meme, setMeme] = useState({
    firstText: "",
    secondText: "",
    randomImage: "",
  });

  const [allMemeImage] = useState(Gallery);

  function getMemeOnClick() {
    const galleryArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * galleryArray.length);
    const url = galleryArray[randomNumber].url;
    setMeme((prevState) => ({ ...meme, randomImage: url }));
  }
  return (
    <div>
      <div className="tool">
        <input type="text" className="add1" alt="" placeholder="Firsttext" />
        <input type="text" className="add" alt="" placeholder="Secondtext" />
      </div>
      <button placeholder="Enter" className="button" onClick={getMemeOnClick}>
        Get a new meme image 🖼
      </button>
      <img src={meme.randomImage} alt="" className="meme-image" />
    </div>
  );
}

export default Form;
