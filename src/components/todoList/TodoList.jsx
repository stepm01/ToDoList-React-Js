import TodoItem from "../todoItem/TodoItem";
import "./index.scss";
import { useTodoContext } from "../providers/TodoProvider";
import PropTypes from "prop-types";
import { useEffect } from "react";

const TodoList = ({ openModal }) => {
  const { todos } = useTodoContext();

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <div className="todo-list">
      {todos.map((todo) => {
        if (!todo.isHidden) {
          return <TodoItem data={todo} key={todo.id} openModal={openModal} />;
        }
        return null;
      })}
    </div>
  );
};

TodoList.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default TodoList;
