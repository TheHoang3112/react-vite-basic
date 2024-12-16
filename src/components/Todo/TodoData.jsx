

const TodoData = (props) => {
    const {name,age,data} = props;
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Im {age}</div>
            <div>I Live {data.address} and {data.country}</div>
            <div> Learning React </div>
            <div> Watching Youtube </div>
        </div>
    );
}

export default TodoData;