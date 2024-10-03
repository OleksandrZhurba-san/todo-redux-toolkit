import { removeTodoFromList, toggleTodo } from "../../redux/slices/todoSlice";
import { useDispatch } from "react-redux";
import { Flex, Typography, Button, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

const { confirm } = Modal;
const { Text } = Typography;

export default function Item({ id, title, complete }) {
  const dispatcher = useDispatch();
  function showConfirm() {
    confirm({
      title: "Do you want to delete this item?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        handleRemove();
      },
      onCancel() {},
    });
  }

  function handleRemove() {
    dispatcher(removeTodoFromList(id));
  }
  function handleComplete() {
    dispatcher(toggleTodo(id));
  }

  return (
    <Flex wrap="flex-wrap" justify="start" gap={16}>
      {complete ? <Text delete> {title}</Text> : <Text strong>{title}</Text>}
      <Flex vertical>
        <Button type="primary" onClick={handleComplete}>
          complete
        </Button>
        <Button danger onClick={showConfirm}>
          remove
        </Button>
      </Flex>
    </Flex>
  );
}
