import TodoData from "./components/Todo/TodoData";
import TodoNew from "./components/Todo/TodoNew";
import reactLogo from "./assets/react.svg"
import "./components/Todo/todo.css"

const App = () => {
  const name = "HoangCT";
  const age = 26;
  const data = {
    address: "HCM",
    country: "VietNam"
  }

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
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo"/>
      </div>
    </div>
  );
}

export default App
