import Input from "./components/input/Input";
import TodoList from "./components/todoList/TodoList";
import Hide from "./components/hide/Hide";
import TodoProvider from "./components/providers/TodoProvider";
import { useTodoModal } from "./hooks/useTodoModal";
import DeleteModal from "./components/delete-modal/DeleteModal";

function App() {
  ///// ***** Delete modal ***** /////
  const { isModalOpen, closeModal, currentTodoId, openModal } = useTodoModal();

  return (
    <div className="app">
      <div className="container-md">
        <TodoProvider>
          {isModalOpen && (
            <DeleteModal closeModal={closeModal} todoId={currentTodoId} />
          )}
          <Hide />
          <Input />
          <TodoList closeModal={closeModal} openModal={openModal} />
        </TodoProvider>
      </div>
    </div>
  );
}
export default App;
