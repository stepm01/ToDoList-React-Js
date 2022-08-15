import React, { useCallback, useState } from "react";
import "./index.scss";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import PropTypes from "prop-types";
import { useTodoContext } from "../providers/TodoProvider";

const TodoItem = ({ data, openModal }) => {
  const { changeTodoItem } = useTodoContext();
  const [inp, setInp] = useState(data.isCompleted);

  const handleChange = useCallback(
    (e) => {
      const checked = e.target.checked;
      setInp(checked);
      changeTodoItem(data.id);
    },
    [changeTodoItem, data.id]
  );

  return (
    <>
      <div className="todo">
        <div className="todo-leftsd">
          <div className="todo-leftsd-checkbox">
            <input type="checkbox" checked={inp} onChange={handleChange} />
          </div>
          <div className="todo-leftsd-text">
            <p>{data.text}</p>
          </div>
        </div>
        <div className="todo-delete">
          <button
            className="todo-delete-btn"
            onClick={() => openModal(data.id)}
          >
            <IoMdClose className="todo-delete-btn-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

TodoItem.propTypes = {
  data: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default TodoItem;
