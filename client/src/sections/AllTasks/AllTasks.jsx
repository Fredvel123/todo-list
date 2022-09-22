import { useEffect } from "react";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading";
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
      All Tasks
      {tasks.length > 0 ? (
        tasks.map((item) => <h2>{item.description}</h2>)
      ) : (
        <SpinnerLoading />
      )}
    </div>
  );
}
