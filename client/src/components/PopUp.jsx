import React from "react";

const PopUp = (props) => {
  const { open, closePopup, deletePlayer, playerToDelete } = props;
  if (!open) return null;

  return (
    <div className="popup">
      Are you sure you wante to remove {playerToDelete}
      <button onClick={deletePlayer}>Yes</button>
      <button onClick={closePopup}>Cancel</button>
    </div>
  );
};

export default PopUp;
