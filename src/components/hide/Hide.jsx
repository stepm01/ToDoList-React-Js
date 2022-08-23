import React, { useMemo } from "react";
import "./index.scss";
import { useTodoContext } from "../providers/TodoProvider";

const Hide = () => {
  const { todos, changeTodoHidden } = useTodoContext();

  const isOneChecked = useMemo(() => {
    const result = todos.reduce((acc, elem) => {
      if (elem.isCompleted) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    return result;
  }, [todos]);

  return (
    <>
      {Boolean(isOneChecked) && (
        <div className="hide">
          <input type="checkbox" onClick={changeTodoHidden} />
          <p className="hide-completed">Hide completed</p>
        </div>
      )}
    </>
  );
};

export default Hide;
