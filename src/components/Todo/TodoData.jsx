

const TodoData = (props) => {
    const {todoList, deleteTodo} = props;
    const handleBtnDelete = (id) => {
        deleteTodo(id);
    }
    return (
        <div className="todo-data">
            {todoList.map((item) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name}</div>
                        <button 
                        onClick={() => handleBtnDelete(item.id)}
                        style={{cursor: "pointer"}}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoData;