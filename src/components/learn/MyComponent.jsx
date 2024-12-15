import "./style.css"
const MyComponent = () => {
    return (
        <>
            <div>Demo Component</div>
            <div className="child" 
                style={{fontWeight: "bold"}}
            >Child</div>
        </>
    );
}

export default MyComponent;