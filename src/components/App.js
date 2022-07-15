import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/system";

import GameListS from "./GameList";

import "./App.css";
import { Button } from "@mui/material";

function App() {
  const [gamedata, setgamedata] = useState({
    // game data
    apiData: [],
    gamesData: [],
    sort: "",
  });

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
        // console.log(gamedata);
      });
  }, []);
  console.log(gamedata);

  //sort by score

  const sortbyscore = () => {
    var games = gamedata.gamesData.sort(scoreCopm);
    if (gamedata.sort === "") {
      setgamedata({
        gamesData: games,
        sort: "asc",
      });
    } else if (gamedata.sort === "asc") {
      setgamedata({
        gamesData: gamedata.gamesData.reverse(),
        sort: "desc",
      });
    } else {
      setgamedata({
        gamesData: gamedata.gamesData.reverse(),
        sort: "",
      });
    }
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <center>
        {/* <Autocomplete hintText="Search for a game" /> */}
        <button onClick={sortbyscore}>Sort by score</button>
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
  return parseInt(a.score, 10) - parseInt(b.score, 10);
}
