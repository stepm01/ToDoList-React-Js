import React from "react";
import "./index.scss";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";

const TodoItem = ({todo, removeTodoItem}) => {
  return (
   <>
            <div className="wrapper">
            <div className="todo">
              <div className="todo-leftsd">
                <div className="todo-leftsd-checkbox">
                  <input type="checkbox" />
                </div>
                <div className="todo-leftsd-text">
                  <p>
                    {todo.text}
                  </p>
                </div>
              </div>
              <div className="todo-delete">
                <button className="todo-delete-btn" onClick={() =>  removeTodoItem(todo)}>
                  <IoMdClose className="todo-delete-btn-icon"/>
                </button>
              </div>
            </div>
             </div>
        </> 
  );
};

export default TodoItem;
