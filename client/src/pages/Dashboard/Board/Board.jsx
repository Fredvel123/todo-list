import { useState } from "react";
import { Outlet } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import { BoardStyles } from "./BoardStyles";

function Board() {
  const [sidebar, setSidebar] = useState(false);
  const { colors, changeTheme } = useTheme();
  return (
    <BoardStyles state={sidebar} color={colors}>
      <div className="head">
        <h2 onClick={() => setSidebar(!sidebar)}>icon</h2>
        <input type="text" placeholder="fuck you" />
        <button onClick={changeTheme}>set theme</button>
      </div>
      <Outlet />
    </BoardStyles>
  );
}

export default Board;
