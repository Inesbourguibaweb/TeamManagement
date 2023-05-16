import React, { useState, useEffect } from "react";
import SubNavTwo from "./SubNavTwo";
import axios from "axios";
import { useParams } from "react-router-dom";

const DisplayPlayerStatus = (props) => {
  const { setManagePlayersStatusPage, setManagePlayersPage } = props;
  const { idGame } = useParams();
  const [playerStatus, setPlayerStatus] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setManagePlayersStatusPage(true);
    setManagePlayersPage(false);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => {
        console.log(res.data);
        setPlayerStatus(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [trigger]);

  const changeGameStatus = (id, newStatus) => {
    let statusGame = {};
    if (idGame === "1") {
      statusGame.gameOneStatus = newStatus;
    } else if (idGame === "2") {
      statusGame.gameTwoStatus = newStatus;
    } else {
      statusGame.gameThreeStatus = newStatus;
    }
    axios
      .put("http://localhost:8000/api/players/" + id, statusGame)
      .then((response) => {
        console.log(response);
        setTrigger(!trigger);
      })
      .catch((err) => console.log(err.response));
  };
  return (
    <div className="container">
      <h1> Player Status - Game {idGame} </h1>
      <SubNavTwo idGame={idGame} />
      <table className="playerTable">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {idGame === "1" ? (
            playerStatus.map((player, index) => (
              <tr key={index}>
                <td>{player.playerName}</td>
                <td>
                  <button
                    className="button"
                    onClick={(e) => changeGameStatus(player._id, "Playing")}
                    style={{
                      backgroundColor:
                        player.gameOneStatus === "Playing" ? "green" : "white",
                    }}
                  >
                    Playing
                  </button>
                  <button
                    className="button"
                    onClick={(e) => changeGameStatus(player._id, "Not Playing")}
                    style={{
                      backgroundColor:
                        player.gameOneStatus === "Not Playing"
                          ? "red"
                          : "white",
                    }}
                  >
                    Not Playing
                  </button>
                  <button
                    className="button"
                    onClick={(e) => changeGameStatus(player._id, "Undecided")}
                    style={{
                      backgroundColor:
                        player.gameOneStatus === "Undecided"
                          ? "yellow"
                          : "white",
                    }}
                  >
                    Undecided
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}

          {idGame === "2" ? (
            playerStatus.map((player, index) => (
              <tr key={index}>
                <td>{player.playerName}</td>
                <td>
                  <button
                    className="button"
                    onClick={(e) => changeGameStatus(player._id, "Playing")}
                    style={{
                      backgroundColor:
                        player.gameTwoStatus === "Playing" ? "green" : "white",
                    }}
                  >
                    Playing
                  </button>
                  <button
                    className="button"
                    onClick={(e) => changeGameStatus(player._id, "Not Playing")}
                    style={{
                      backgroundColor:
                        player.gameTwoStatus === "Not Playing"
                          ? "red"
                          : "white",
                    }}
                  >
                    Not Playing
                  </button>
                  <button
                    className="button"
                    onClick={(e) => changeGameStatus(player._id, "Undecided")}
                    style={{
                      backgroundColor:
                        player.gameTwoStatus === "Undecided"
                          ? "yellow"
                          : "white",
                    }}
                  >
                    Undecided
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
          {idGame === "3" ? (
            playerStatus.map((player, index) => (
              <tr key={index}>
                <td>{player.playerName}</td>
                <td>
                  <button
                    className="button"
                    onClick={(e) => changeGameStatus(player._id, "Playing")}
                    style={{
                      backgroundColor:
                        player.gameThreeStatus === "Playing"
                          ? "green"
                          : "white",
                    }}
                  >
                    Playing
                  </button>
                  <button
                    className="button"
                    onClick={(e) => changeGameStatus(player._id, "Not Playing")}
                    style={{
                      backgroundColor:
                        player.gameThreeStatus === "Not Playing"
                          ? "red"
                          : "white",
                    }}
                  >
                    Not Playing
                  </button>
                  <button
                    className="button"
                    onClick={(e) => changeGameStatus(player._id, "Undecided")}
                    style={{
                      backgroundColor:
                        player.gameThreeStatus === "Undecided"
                          ? "yellow"
                          : "white",
                    }}
                  >
                    Undecided
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayPlayerStatus;
