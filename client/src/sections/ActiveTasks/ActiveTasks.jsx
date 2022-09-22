import { useEffect, useState } from "react";
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
  }, []);

  return (
    <div>
      ActiveTasksStyles
      <button onClick={() => console.log(activeTasks)}>
        get tasks actives
      </button>
    </div>
  );
}
