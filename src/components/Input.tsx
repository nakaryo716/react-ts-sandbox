import React, { useContext, useState } from "react";
import { TodoListProvider } from "./Providers/TodoProvider";

export const Input = (props: {children: string}) => {
    const {todos, setTodos} = useContext(TodoListProvider);

    const {children} = props;
    const [text, setText] = useState<string>("");

    const onClickButton = () => {
        if (text === "") {
            return;
        }

        setTodos([...todos, text]);
        setText("");
    };

    const onChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const buttonStyle = {
        height: "30px",
        width: "70px",
        marginLeft: "20px",
    };

    const inputStyle = {
        width: "500px",
        height: "25px",
        borderRadius: "5px",
    };

    return(
        <div style={{textAlign: "center"}}>
            <div>
                <h2>{children}</h2>
                <input onChange={(e) => {onChenge(e)}} value={text} style={inputStyle}></input>
                <button onClick={onClickButton} style={buttonStyle}>Add</button>
            </div>        
        </div>
    );
};