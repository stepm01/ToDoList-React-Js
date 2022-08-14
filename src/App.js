import "./styles/app.scss";
import Input from "./components/input/Input";
import TodoList from "./components/todoList/TodoList";
import TodoProvider from "./components/providers/TodoProvider";

function App() {
  return (
    <div className="app"> 
      <TodoProvider>
        <Input />
        <TodoList />
      </TodoProvider>
    </div>
  );
} 
export default App;
