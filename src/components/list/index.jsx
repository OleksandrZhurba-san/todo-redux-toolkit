import { useSelector } from "react-redux";
import Item from "../item";
import { Flex } from "antd";
export default function List() {
  const todos = useSelector((state) => state.todo.list);
  return (
    <Flex vertical align="start" gap={8}>
      {todos.map((todo, idx) => {
        return <Item key={idx} {...todo} />;
      })}
    </Flex>
  );
}
