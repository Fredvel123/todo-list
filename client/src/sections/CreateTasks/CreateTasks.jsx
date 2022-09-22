// components
import { useState } from "react";
import Input from "../../components/Input/Input";
import { createTasks } from "../../config/endpoints";
import useToken from "../../hooks/useToken";
import CardNotification from "../../components/CardNotification/CardNotification";
import useTasks from "../../hooks/useTasks";

export default function CreateTasks() {
  const { token } = useToken();
  const [title, setTitle] = useState({ value: "" });
  const [description, setDescription] = useState({ value: "" });
  const { updateTasks } = useTasks();
  const [card, setCard] = useState({
    status: false,
    message: "",
    callback: null,
  });

  const createNewTask = async () => {
    try {
      const post = await fetch(createTasks, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "access-token": token.token,
        },
        body: JSON.stringify({
          title: title.value,
          description: description.value,
        }),
      });
      const res = await post.json();
      setCard({ ...card, message: res.message, status: true });
      updateTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    createNewTask();
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form action="" onSubmit={handlerSubmit}>
        <Input
          placeh="Title task"
          title="Title"
          state={title}
          setState={setTitle}
        />
        <Input
          placeh="Description task"
          title="Description"
          state={description}
          setState={setDescription}
        />
        <button>Create</button>
      </form>
      <CardNotification setState={setCard} state={card} btn="ok" />
    </div>
  );
}
