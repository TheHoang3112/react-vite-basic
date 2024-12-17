import TodoData from "./components/Todo/TodoData";
import TodoNew from "./components/Todo/TodoNew";
import reactLogo from "./assets/react.svg"
import "./components/Todo/todo.css"
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React " },
    // { id: 2, name: "Watching Youtube" }
  ]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo]);
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      {todoList.length > 0 ?
      <TodoNew 
        addNewTodo={addNewTodo}
      />
      :
      <TodoData 
        todoList={todoList}
      />
    }
      <div className="todo-image">
        <img src={reactLogo} className="logo"/>
      </div>
    </div>
  );
}

export default App
