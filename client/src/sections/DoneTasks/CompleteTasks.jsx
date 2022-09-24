import { useState } from "react";
import { useEffect } from "react";
import CardTask from "../../components/CardTask/CardTask";
import useTasks from "../../hooks/useTasks";

export default function CompleteTasks() {
  const [completeTasks, setCompleteTasks] = useState([]);
  const { tasks } = useTasks();
  useEffect(() => {
    const elements = tasks.filter((elem) => elem.status === true);
    const getAllCompleteTasks = () => {
      setCompleteTasks(elements);
    };
    getAllCompleteTasks();
    // eslint-disable-next-line
  }, [tasks]);

  return (
    <div>
      <h2>Complete tasks</h2>
      <CardTask items={completeTasks} />
    </div>
  );
}
