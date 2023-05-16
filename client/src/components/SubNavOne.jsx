import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SubNavOne = (props) => {
  const { listPage } = props;
  const [isLisActive, setIsLisActive] = useState({});
  const [isAddPlayerActive, setIsAddPlayerActive] = useState({});
  const style = { fontWeight: "800" };

  useEffect(() => {
    if (listPage) {
      setIsAddPlayerActive({});
      setIsLisActive(style);
    } else {
      setIsAddPlayerActive(style);
      setIsLisActive({});
    }
  }, [listPage]);
  return (
    <div>
      <p>
        <span style={isLisActive}>
          <Link to={"/players/list"}>List | </Link>
        </span>
        <span style={isAddPlayerActive}>
          <Link to={"/players/addplayer"}> Add Player </Link>{" "}
        </span>{" "}
      </p>
    </div>
  );
};

export default SubNavOne;
