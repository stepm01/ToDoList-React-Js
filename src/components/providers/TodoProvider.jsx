import { createContext, useState, useContext, useEffect } from "react";

///// ***** Context ***** /////
const TodoContext = createContext();

const getLocalStorage = () => {
  const list = localStorage.getItem("data");
  if (list) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

///// ***** Provider ***** /////
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    return getLocalStorage();
  });
  const addTodoItem = (newItem) => {
    setTodos((prev) => {
      return [
        {
          id: Boolean(prev[0]) ? prev[0].id + 1 : 1,
          text: newItem,
          isCompleted: false,
          isHidden: false,
        },
        ...todos,
      ];
    });
  };

  const changeTodoItem = (id) => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) item.isCompleted = !item.isCompleted;
        return item;
      });
    });
  };

  const changeTodoHidden = () => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.isCompleted) {
          item.isHidden = !item.isHidden;
        }
        return item;
      });
    });
  };

  ///// ***** Local Storage ***** /////
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todos));
  }, [todos]);

  ///// ***** Delete function ***** /////
  const removeTodoItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // const onChange =
  ///// *****Context Value***** /////
  const contextValue = {
    todos,
    setTodos,
    addTodoItem,
    removeTodoItem,
    changeTodoItem,
    getLocalStorage,
    changeTodoHidden,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
