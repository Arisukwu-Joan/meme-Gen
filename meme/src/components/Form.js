import React, { useEffect, useState } from "react";

function Form() {
  const [meme, setMeme] = useState({
    firstText: "",
    secondText: "",
    randomImage: "",
  });

  const [allMemeImage, setAllMemeImage] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImage(data.data.memes));
  }, []);

  function getMemeOnClick(event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemeImage.length);
    const url = allMemeImage[randomNumber].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  }
  function handleChange(event) {
    const { value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        firstText: value,
      };
    });
  }
  function handleChangeBottom(event) {
    const { value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        secondText: value,
      };
    });
  }

  return (
    <main>
      <form>
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
            onChange={handleChangeBottom}
          />
        </div>

        <button type="submit" className="button" onClick={getMemeOnClick}>
          Get a new meme image 🖼
        </button>
      </form>
      <div className="container">
        <img src={meme.randomImage} alt="" className="meme-image" />
        <h2 className="firstText">{meme.firstText}</h2>
        <h2 className="secondText ">{meme.secondText}</h2>
      </div>
    </main>
  );
}

export default Form;
