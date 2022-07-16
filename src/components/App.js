import React, { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
import GameListS from "./GameList";

import "./App.css";
import { Title } from "@mui/icons-material";

function App() {
  const [gamedata, setgamedata] = useState({
    // game data
    apiData: [],
    gamesData: [],
    sort: "",
  });

  const [text, setText] = useState("");

  //button text according to sort
  const [to_sort, set_to_sort] = useState("Sort by Score");

  //gametitle

  // fetch data from api
  useEffect(() => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
    )
      .then((res) => res.json())
      .then((result) => {
        setgamedata({
          apiData: result,
          gamesData: result,
        });

        console.log(result);
      });
  }, []);

  //sort by score

  const sortbyscore = () => {
    var games = gamedata.gamesData.sort(scoreCopm);
    if (gamedata.sort === "") {
      setgamedata({
        gamesData: games,
        sort: "asc",
      });
      set_to_sort("High to Low");
    } else if (gamedata.sort === "asc") {
      setgamedata({
        gamesData: gamedata.gamesData.reverse(),
        sort: "desc",
      });
      set_to_sort("Sort By Score");
    } else {
      setgamedata({
        gamesData: gamedata.gamesData.reverse(),
        sort: "",
      });
      set_to_sort("Low to High");
    }
  };

  const onChangeHandler = (text) => {
    let matches = [];

    if (text.length > 0) {
      matches = gamedata.gamesData.filter((game) => {
        const regex = new RegExp(`${text}`, "gi");
        console.log(regex);
        console.log("game", game);
        return game.title.match(regex);
      });
    }

    console.log(matches);
    setText(text);
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <input
        type="text"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
      />

      <div class="d-grid gap-2 col-6 mx-auto text-center">
        <button class="btn btn-primary" type="button" onClick={sortbyscore}>
          {to_sort}
        </button>
      </div>

      <center>
        {gamedata.gamesData.map((game, index) => {
          if (index === 0) {
            return false;
          }
          return <GameListS key={index} game={game} />;
        })}
      </center>
    </div>
  );
}

export default App;

//compare function sortByScore()
function scoreCopm(a, b) {
  return parseFloat(a.score, 10) - parseFloat(b.score, 10);
}
