import React from "react";
import { Outlet } from "react-router-dom";

function Board() {
  return (
    <div>
      <div className="head">
        <h2>fdsfd</h2>
        <input type="text" placeholder="fuck you" />
      </div>
      <Outlet />
    </div>
  );
}

export default Board;
