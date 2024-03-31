import { useContext } from "react";
import { TodoListProvider } from "./Providers/TodoProvider";

export const List = () => {
    const {todos, setTodos} = useContext(TodoListProvider);

    const removeHandle = (index: number): void => {
        const prevTodos = [...todos];
        const modifiedTodos = prevTodos.filter((_todo, i) => i !== index);
        setTodos(modifiedTodos);
    };

    const listStyle = {
        listStyleType: "none",
        paddingLeft: 0,
    }

    const liStyle = {
        margin: 30,
    }

    const buttonStyle = {
        marginLeft: "20px",
    }

    return(
        <div style={{textAlign: "center", paddingTop: "50px"}}>
            <h2>Todo List</h2>
            <ul style={listStyle}>
            {todos.map((value, index) => {
                return(                  
                    <li key={index} style={liStyle}>{value}<button onClick={() => {removeHandle(index)}} style={buttonStyle}>Remove</button></li>
                )
            })}
            </ul>
        </div>
    )
};
