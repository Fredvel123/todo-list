import { useState } from "react";
import { Outlet } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import { BoardStyles } from "./BoardStyles";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Board() {
  const [sidebar, setSidebar] = useState(false);
  const { colors } = useTheme();
  return (
    <BoardStyles state={sidebar} color={colors}>
      <div className="head">
        <Bars3Icon
          onClick={() => setSidebar(!sidebar)}
          className="head__menu"
        />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </BoardStyles>
  );
}

export default Board;
