import { useEffect, useState } from "react";
import CardTask from "../../components/CardTask/CardTask";
import useTasks from "../../hooks/useTasks";

export default function ActiveTasks() {
  const [activeTasks, setactiveTasks] = useState([]);
  const { tasks } = useTasks();
  useEffect(() => {
    const elements = tasks.filter((elem) => elem.status === false);
    const getAllActiveTasks = () => {
      setactiveTasks(elements);
    };
    getAllActiveTasks();
    // eslint-disable-next-line
  }, [tasks]);

  return (
    <div>
      <h2>Active Tasks</h2>
      <CardTask items={activeTasks} />
    </div>
  );
}
