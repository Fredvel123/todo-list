import { CardTaskStyled } from "./CardTaskStyles";
import { TrashIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { editUserByid, removeTaskByid } from "../../config/endpoints";
import useTasks from "../../hooks/useTasks";
import useToken from "../../hooks/useToken";
import useTheme from "../../hooks/useTheme";

export default function CardTask({ items }) {
  const { colors, fonts } = useTheme();
  const { updateTasks } = useTasks();
  const { token } = useToken();
  const removeTask = async (id_task) => {
    try {
      await fetch(removeTaskByid + `/${id_task}`, {
        method: "DELETE",
      });
      updateTasks();
    } catch (error) {
      console.log(error);
    }
  };
  const changeStatusToTask = async (id_task, status) => {
    try {
      await fetch(editUserByid + `/${id_task}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          "access-token": token.token,
        },
        body: JSON.stringify({
          status: !status,
        }),
      });
      updateTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CardTaskStyled color={colors} font={fonts}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="buttons">
              {item.status ? (
                <CheckCircleIcon
                  className="complete icon"
                  onClick={() => changeStatusToTask(item.id_task, item.status)}
                />
              ) : (
                <div
                  className="uncomplete icon"
                  onClick={() => changeStatusToTask(item.id_task, item.status)}
                />
              )}
              <TrashIcon
                className="card__trash icon"
                onClick={() => removeTask(item.id_task)}
              />
            </div>
          </div>
        ))
      ) : (
        <p>There are no tasks</p>
      )}
    </CardTaskStyled>
  );
}
