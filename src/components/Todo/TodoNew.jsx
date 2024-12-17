import { useState } from "react";


const TodoNew = (props) => {
    const {addNewTodo} = props;

    //addNewTodo("HoangCT");

    const [valueInput, setValueInput] = useState("");
    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className="todo-new">
            <input type="text" 
                onChange={(event) => {handleOnChange(event.target.value)}}
                value={valueInput}
            />
            <button
                style={{cursor: "pointer"}}
                onClick={handleClick}
            >Add</button>
            <div>
                Value input = {valueInput}
            </div>
        </div>
    );
}

export default TodoNew;