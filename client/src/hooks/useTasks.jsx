import { useSelector, useDispatch } from "react-redux";
import { getTasksByUser } from "../config/endpoints";
import { setTasks } from "../redux/slices/tasks";
import useToken from "./useToken";

export default function useTasks() {
  const tasks = useSelector((state) => state.tasks.value);
  const { token } = useToken();
  const dispatch = useDispatch();

  const resetTasksInLocalStorage = () => {
    dispatch(setTasks([]));
  };

  const getAllTasksByUser = async () => {
    const request = await fetch(getTasksByUser, {
      method: "GET",
      headers: {
        "access-token": token.token,
      },
    });
    const tasks = await request.json();
    dispatch(setTasks(tasks));
    console.log(tasks);
  };

  return { updateTasks: getAllTasksByUser, tasks, resetTasksInLocalStorage };
}
