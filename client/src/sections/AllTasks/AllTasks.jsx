import { useEffect } from "react";
import CardTask from "../../components/CardTask/CardTask";
import useTasks from "../../hooks/useTasks";

export default function AllTasks() {
  const { updateTasks, tasks } = useTasks();
  useEffect(() => {
    if (tasks.length < 1) {
      updateTasks();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>All Tasks</h2>
      <CardTask items={tasks} />
    </div>
  );
}
