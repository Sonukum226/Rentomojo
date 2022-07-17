import React, { useState, useEffect } from "react";

import GameListS from "./GameList";

import "./App.css";

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
        const temp = [];

        for (var i = 1; i < result.length; i++) {
          temp.push(result[i]);
        }

        setgamedata({
          apiData: temp,
          gamesData: temp,
        });

        // console.log(result);
      });
  }, []);

  //sort by score

  const sortbyscore = () => {
    var games = gamedata.gamesData.sort(scoreCopm);
    if (gamedata.sort === "") {
      setgamedata({
        ...gamedata,
        gamesData: games,
        sort: "asc",
      });
      set_to_sort("High to Low");
    } else if (gamedata.sort === "asc") {
      setgamedata({
        ...gamedata,
        gamesData: gamedata.gamesData.reverse(),
        sort: "desc",
      });
      set_to_sort("Sort By Score");
    } else {
      setgamedata({
        ...gamedata,
        gamesData: gamedata.gamesData.reverse(),
        sort: "",
      });
      set_to_sort("Low to High");
    }
  };

  const onChangeHandler = (text) => {
    let matches = [];

    if (text.length > 0) {
      matches = gamedata.apiData.filter((game) => {
        const regex = new RegExp(`${text}`, "gi");
        return game.title.match(regex);
      });
    }

    console.log(matches);

    if (matches.length > 0) {
      setgamedata({ ...gamedata, gamesData: matches, sort: "" });
    } else if (matches.length === 0) {
      setgamedata({ ...gamedata, gamesData: gamedata.apiData, sort: "" });
    }

    setText(text);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div
        className="d-grid gap-2 col-6 mx-auto text-center"
        style={{ marginBottom: "30px" }}
      >
        <input
          type="text"
          class="form-control mr-sm-2"
          placeholder="Search Game...."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
        />
      </div>

      <div class="d-grid gap-2 col-6 mx-auto text-center ">
        <button class="btn btn-primary" type="button" onClick={sortbyscore}>
          {to_sort}
        </button>
      </div>

      <center>
        {gamedata.gamesData.map((game, index) => {
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
