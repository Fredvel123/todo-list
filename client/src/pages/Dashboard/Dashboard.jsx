import Board from "./Board/Board";
import { DashboardStyles } from "./DashboadStyles";
import SideBar from "./SideBar/SideBar";

export default function Dashboard() {
  return (
    <DashboardStyles>
      <SideBar />
      <Board />
    </DashboardStyles>
  );
}
