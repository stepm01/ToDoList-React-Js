import { memo, useCallback } from "react";
import { useTodoContext } from "../providers/TodoProvider";
import "./index.scss";
import PropTypes from "prop-types";

const DeleteModal = ({ closeModal, todoId }) => {
  const { removeTodoItem } = useTodoContext();

  const deleteItem = useCallback(
    (id) => {
      removeTodoItem(id);
      closeModal();
    },
    [closeModal, removeTodoItem]
  );

  return (
    <div
      className="wrapper"
      onClick={() => {
        closeModal();
      }}
    >
      <div className="delete" onClick={(e) => e.stopPropagation()}>
        <div className="delete-title">
          <p>Are you sure you want to delete?</p>
        </div>
        <div className="delete-btns">
          <button
            className="delete-btns-yes"
            onClick={() => deleteItem(todoId)}
          >
            Yes
          </button>
          <button className="delete-btns-no" onClick={closeModal}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  todoId: PropTypes.number.isRequired,
};

export default memo(DeleteModal);
