import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoToList } from "../../redux/slices/todoSlice";
import { uid } from "uid";
import { Button, notification } from "antd";

export default function Form() {
  const [title, setTitle] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const dispatcher = useDispatch();

  function openNotification() {
    api.open({
      message: "todo has been added",
      duration: 2,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    title &&
      dispatcher(
        addTodoToList({
          id: uid(),
          title,
          complete: false,
        })
      );
    setTitle("");
    openNotification();
  }

  return (
    <form>
      {contextHolder}
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Enter new TODO"
      />
      <Button onClick={handleSubmit}>ADD</Button>
    </form>
  );
}
