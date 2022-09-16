import { useState } from "react";
import LogouCard from "../../components/LogoutCard/LogouCard";
import Board from "./Board/Board";
import { DashboardStyles } from "./DashboadStyles";
import SideBar from "./SideBar/SideBar";

export default function Dashboard() {
  const [cardActive, setCardActive] = useState(false);
  // close log out card
  const closeCardLogout = () => {
    setCardActive(false);
  };
  const openCardLogout = () => {
    setCardActive(true);
  };
  return (
    <DashboardStyles>
      <SideBar openCard={openCardLogout} />
      <Board />
      <LogouCard open={cardActive} callback={closeCardLogout} />
    </DashboardStyles>
  );
}
