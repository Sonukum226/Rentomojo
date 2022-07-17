// // import { React } from "react";
// import { Card } from "react-bootstrap/Card";
// import { ListGroup } from "react-bootstrap/ListGroup";

function GameList({ game }) {
  return (
    <div
      class="card "
      style={{
        width: "25rem",
        margin: "25px",
        display: "inline-flex",
      }}
    >
      <div class="card-header" style={{ textAlign: "center" }}>
        Game Details
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          GameName: <b>{game.title}</b>{" "}
        </li>
        <li class="list-group-item">
          platform:
          <a href="#">
            <b>{game.platform}</b>
          </a>
        </li>
        <li class="list-group-item">
          score:<b>{game.score}/10</b>
        </li>

        <li class="list-group-item">
          editors_choice: <b>{game.editors_choice}</b>
        </li>
      </ul>
    </div>
  );
}

export default GameList;

//  "react-bootstrap": "^2.4.0",
