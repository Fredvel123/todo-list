import Board from "./Board/Board";
import { DashboardStyles } from "./DashboadStyles";

export default function Dashboard() {
  return (
    <DashboardStyles>
      <div className="menu">
        <h2>hello world home</h2>
      </div>
      <Board />
    </DashboardStyles>
  );
}
