import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SubNavTwo = (props) => {
  const { idGame } = useParams();
  const style = { fontWeight: "800" };
  const [gameOne, setGameOne] = useState({});
  const [gameTwo, setGameTwo] = useState({});
  const [gameThree, setGameThree] = useState({});

  useEffect(() => {
    if (idGame === "1") {
      setGameOne(style);
      setGameTwo({});
      setGameThree({});
    } else if (idGame === "2") {
      setGameOne({});
      setGameTwo(style);
      setGameThree({});
    } else if (idGame === "3") {
      setGameOne({});
      setGameTwo({});
      setGameThree(style);
    }
  }, [idGame]);

  return (
    <div>
      <p>
        <span style={gameOne}>
          <Link to={"/status/game/1"}>Game 1 | </Link>
        </span>
        <span style={gameTwo}>
          <Link to={"/status/game/2"}> Game 2 |</Link>{" "}
        </span>
        <span style={gameThree}>
          <Link to={"/status/game/3"}> Game 3 </Link>{" "}
        </span>
      </p>
    </div>
  );
};

export default SubNavTwo;
