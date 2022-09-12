import { useState } from "react";
import { Outlet } from "react-router-dom";
import { BoardStyles } from "./BoardStyles";

function Board() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <BoardStyles state={sidebar}>
      <div className="head">
        <h2 onClick={() => setSidebar(!sidebar)}>icon</h2>
        <input type="text" placeholder="fuck you" />
      </div>
      <Outlet />
    </BoardStyles>
  );
}

export default Board;
