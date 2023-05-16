import "./App.css";
import DisplayPlayerStatus from "./components/DisplayPlayerStatus";
import DisplayPlayers from "./components/DisplayPlayers";
import FormPlayer from "./components/FormPlayer";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [managePlayersPage, setManagePlayersPage] = useState(true);
  const [managePlayersStatusPage, setManagePlayersStatusPage] = useState(false);
  const [addplayerPage, setAddplayerPage] = useState(false);
  const [listPage, setListPage] = useState(true);

  return (
    <div className="App">
      <NavBar managePlayersPage={managePlayersPage} />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/players/list" replace={true} />}
        />
        <Route
          path="/players/list"
          element={
            <DisplayPlayers
              setManagePlayersPage={setManagePlayersPage}
              setManagePlayersStatusPage={setManagePlayersStatusPage}
              setAddplayerPage={setAddplayerPage}
              setListPage={setListPage}
              listPage={listPage}
            />
          }
          default
        />
        <Route
          path="/players/addplayer"
          element={
            <FormPlayer
              setAddplayerPage={setAddplayerPage}
              setListPage={setListPage}
              listPage={listPage}
            />
          }
        />
        <Route
          path="/status/game/:idGame"
          element={
            <DisplayPlayerStatus
              setManagePlayersPage={setManagePlayersPage}
              setManagePlayersStatusPage={setManagePlayersStatusPage}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
