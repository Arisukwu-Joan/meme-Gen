import React, { useEffect, useState } from "react";
// import Gallery from "../Gallery";

function Form() {
  const [meme, setMeme] = useState({
    firstText: "",
    secondText: "",
    randomImage: "https://i.imgflip.com/gk5el.jpg",
  });

  const [allMemeImage, setAllMemeImage] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes");
    ((res) => res.json()).then((data) => setAllMemeImage(data.data.memes));
  }, []);

  function getMemeOnClick() {
    const randomNumber = Math.floor(Math.random() * allMemeImage.length);
    const url = allMemeImage[randomNumber].url;
    setMeme((prevState) => ({
      ...meme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      [name]: value,
    }));
  }
  return (
    <main>
      <div>
        <div className="tool">
          <input
            type="text"
            className="add1"
            alt=""
            placeholder="Firsttext"
            value={meme.firstText}
            name="firsttext"
            onChange={handleChange}
          />

          <input
            type="text"
            className="add"
            alt=""
            placeholder="Secondtext"
            value={meme.secondText}
            name="secondtext"
            onChange={handleChange}
          />
        </div>

        <button placeholder="Enter" className="button" onClick={getMemeOnClick}>
          Get a new meme image 🖼
        </button>
        <img src={meme.randomImage} alt="" className="meme--image" />
      </div>
      <div className="meme">
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Form;
