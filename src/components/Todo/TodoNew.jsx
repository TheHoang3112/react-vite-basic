

const TodoNew = (props) => {
    const {addNewTodo} = props;

    //addNewTodo("HoangCT");

    const handleClick = () => {
        alert("Event On Click");
    }

    const handleOnChange = (name) => {
        console.log(">>> Handle On Change: ", name);
    }
    return (
        <div className="todo-new">
            <input type="text" 
                onChange={(event) => {handleOnChange(event.target.value)}}
            />
            <button
                style={{cursor: "pointer"}}
                onClick={handleClick}
            >Add</button>
        </div>
    );
}

export default TodoNew;