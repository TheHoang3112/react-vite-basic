import TodoData from "./components/Todo/TodoData";
import TodoNew from "./components/Todo/TodoNew";
import reactLogo from "./assets/react.svg"
import "./components/Todo/todo.css"
import { useState } from "react";

const App = () => {
  const name = "HoangCT";
  const age = 26;
  const data = {
    address: "HCM",
    country: "VietNam"
  }

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React " },
    { id: 2, name: "Watching Youtube" }
  ]);

  const addNewTodo = (name) => {
    alert(`Call function name ${name}`)
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew 
        addNewTodo={addNewTodo}
      />
      <TodoData 
        name={name}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo"/>
      </div>
    </div>
  );
}

export default App
