import { useState } from "react";
import "./index.scss";
import { useTodoContext } from "../providers/TodoProvider";


const Input = () => {
  const { addTodoItem } = useTodoContext();
  const [inputText, setInputText] = useState(""); 
  return (
    <>
      <div className="input">
        <div className="input-title">
          <p>Task</p>
        </div>
        <form className="input-section" onSubmit={(e) => {
          e.preventDefault();
          if(!inputText){
            return;
          }
          if (inputText.length > 54) {
            alert("Input length couldn't be more then 54 symbols"); 
            setInputText("");
            return;
          }
          addTodoItem(inputText);
          setInputText("");
        }}>
          <div className="input-section-inputFill">
            <input
              type="text"
              value={inputText}
              placeholder="Write here"
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
          </div>
          <div className="input-section-btn">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </>
    
  );
};

export default Input;
