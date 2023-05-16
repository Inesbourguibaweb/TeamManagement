import React, { useState, useEffect } from "react";
import axios from "axios";
import SubNavOne from "./SubNavOne";
import PopUp from "./PopUp";

const DisplayPlayers = (props) => {
  const {
    setManagePlayersPage,
    setManagePlayersStatusPage,
    setListPage,
    listPage,
    setAddplayerPage,
  } = props;
  const [players, setPlayers] = useState([]);
  const [isToDelete, setIsToDelete] = useState(false);
  const [playerToDelete, setPlayerToDelete] = useState("");
  const [idPlayerToDelete, setIdPlayerToDelete] = useState(null);

  useEffect(() => {
    setManagePlayersPage(true);
    setManagePlayersStatusPage(false);
  }, []);

  useEffect(() => {
    setListPage(true);
    setAddplayerPage(false);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => {
        console.log(res.data);
        setPlayers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const chooseToDelete = (idToDelete) => {
    axios
      .get(`http://localhost:8000/api/players/${idToDelete}`)
      .then((res) => {
        console.log(res.data._id);
        console.log(res.data.playerName);
        setPlayerToDelete(res.data.playerName);
        setIsToDelete(true);
        setIdPlayerToDelete(res.data._id);
        console.log(isToDelete);
        console.log("playerToDelete", playerToDelete);
        console.log("iidPlayerToDelete", idPlayerToDelete);
      })
      .catch((err) => console.log(err));
  };

  const deletePlayer = (playerId) => {
    axios
      .delete("http://localhost:8000/api/players/" + playerId)
      .then((res) => {
        setPlayers(players.filter((player) => player._id !== playerId));
        setIsToDelete(false);
        console.log("player to delete");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <SubNavOne listPage={listPage} />
      <table className="playerTable">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.playerName}</td>
              <td>{player.preferredPosition}</td>
              <td>
                <button
                  style={{ backgroundColor: "red" }}
                  className="button"
                  onClick={(e) => chooseToDelete(player._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PopUp
        open={isToDelete}
        deletePlayer={(e) => deletePlayer(idPlayerToDelete)}
        playerToDelete={playerToDelete}
        closePopup={(e) => setIsToDelete(false)}
      />
    </div>
  );
};

export default DisplayPlayers;
