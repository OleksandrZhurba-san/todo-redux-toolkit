import "./App.css";
import { Form, List } from "./components";
import { Flex } from "antd";

function App() {
  return (
    <Flex vertical align="center" gap={16}>
      <Form />
      <List />
    </Flex>
  );
}

export default App;
