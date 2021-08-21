import React, { useState } from "react";
import "./styles.css";

const animalsDictionary = {
  "🐈": "Cat",
  "🐕": "Dog",
  "🐑": "Sheep",
  "🐐": "Goat",
  "🐋": "Whale",
  "🐟": "Fish",
  "🦒": "Girraffe",
  "🐭": "Mouse",
  "🦍": "Gorilla",
  "🐵": "Monkey"
};

var emojiweknow = Object.keys(animalsDictionary);

export default function App() {
  const [emojiMeaning, setemojiMeaning] = useState("Meaning will appear here");
  function animalHandler(event) {
    var userAnimal = event.target.value;
    // console.log();

    var emojiMeaning = animalsDictionary[userAnimal];

    if (emojiMeaning === undefined) {
      emojiMeaning = "We dont have it in our DB";
    }

    setemojiMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = animalsDictionary[emoji];
    //console.log(meaning);
    setemojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>AniMoji InterPreter</h1>
      <input onChange={animalHandler} />

      <h2>{emojiMeaning}</h2>

      <h3>Animals we know</h3>
      {emojiweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "1.2rem", cursor: "pointer", padding: "0.5rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
