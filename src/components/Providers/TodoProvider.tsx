import {ReactNode, createContext, useState } from "react"

export const TodoListProvider = createContext({} as {
        todos: string[],
        setTodos: React.Dispatch<React.SetStateAction<string[]>>
    });

export const TodoProvider = (props: {children: ReactNode}) => {
    const {children} = props;

    const [todos, setTodos] = useState<string[]>([]);

    return(
        <TodoListProvider.Provider value={{todos, setTodos}}>
            {children}
        </TodoListProvider.Provider>        
    );
};