import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { managePlayersPage } = props;
  const [isManagePlayerActiveStyle, setIsManagePlayerActiveStyle] = useState(
    {}
  );
  const [isManagePlayerStatusActiveStyle, setIsManagePlayerStatusActiveStyle] =
    useState({});
  const style = { fontWeight: "800" };

  useEffect(() => {
    if (managePlayersPage) {
      setIsManagePlayerActiveStyle(style);
      setIsManagePlayerStatusActiveStyle({});
    } else {
      setIsManagePlayerActiveStyle({});
      setIsManagePlayerStatusActiveStyle(style);
    }
  }, [managePlayersPage]);

  return (
    <div>
      <p>
        <span style={isManagePlayerActiveStyle}>
          <Link to={"/players/list"}>Manage Players | </Link>
        </span>
        <span style={isManagePlayerStatusActiveStyle}>
          <Link to={"/status/game/1"}> Manage Players Status </Link>{" "}
        </span>{" "}
      </p>
    </div>
  );
};

export default NavBar;
