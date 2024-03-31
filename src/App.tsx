import { Input } from "./components/Input";
import { List } from "./components/List";

export const App = () => {
  return(
    <div>
      <h1>Todo List</h1>
      <Input>Add Todo</Input>
      <List></List>
    </div>
  );
};