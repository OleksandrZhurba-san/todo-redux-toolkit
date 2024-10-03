import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoToList } from "../../redux/slices/todoSlice";
import { uid } from "uid";
import { Button, notification, Flex, Input } from "antd";

const { TextArea } = Input;

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
    <Flex style={{ maxWidth: "450px" }} justify="start" align="center" gap={8}>
      {contextHolder}
      <TextArea
        showCount
        maxLength={100}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="can resize"
      />
      <Button type="primary" onClick={handleSubmit}>
        ADD
      </Button>
    </Flex>
  );
}
