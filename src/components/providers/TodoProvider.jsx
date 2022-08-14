import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const addTodoItem = (newItem) => {
    setTodos([
      {
        id: Math.random(),
        text: newItem,
        isCompleted: false,
      },
      ...todos
    ]);
  };
  const removeTodoItem = (todoT) => {
    setTodos(todos.filter((item) => item.id !== todoT.id))
  };
  const contextValue = {
    todos,
    addTodoItem,
    removeTodoItem,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;
