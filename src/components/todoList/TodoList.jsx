import TodoItem from "../todoItem/TodoItem";
import "./index.scss";
import { useTodoContext } from "../providers/TodoProvider";

const TodoList = () => {
  const { todos, removeTodoItem } = useTodoContext();
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <TodoItem  todo={todo} key={todo.id} removeTodoItem={removeTodoItem} />;
      })}
    </div>
  );
};

export default TodoList;
