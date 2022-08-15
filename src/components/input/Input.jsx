import { useState, useRef, useCallback } from "react";
import "./index.scss";
import { useTodoContext } from "../providers/TodoProvider";
// import Warning from '../warning/Warning';

const Input = () => {
  const { addTodoItem } = useTodoContext();
  const [inputText, setInputText] = useState("");
  const [styles, setStyles] = useState({});
  const warningText = useRef(false);

  const handleChange = useCallback((e) => {
    setInputText(e.target.value);

    if (e.target.value.length === 54) {
      setStyles({
        border: "1px solid rgba(255, 49, 4, 1)",
      });
      warningText.current = true;
    } else {
      setStyles({
        border: "1px solid #FFCD04",
      });
      warningText.current = false;
    }
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!inputText || inputText.length > 54) {
        return;
      }
      addTodoItem(inputText);
      setInputText("");
    },
    [addTodoItem, inputText]
  );

  return (
    <>
      <div className="input">
        <div className="input-title">
          <p>Task</p>
        </div>
        <form className="input-section" onSubmit={onSubmitForm}>
          <div className="input-section-inputFill">
            <input
              type="text"
              value={inputText}
              maxLength={54}
              placeholder="Write here"
              onChange={handleChange}
              style={styles}
            />
          </div>
          <div className="input-section-btn">
            <button type="submit">Add</button>
          </div>
        </form>
        {warningText.current && (
          <div className="warning">
            Task content can contain max 54 characters.
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
