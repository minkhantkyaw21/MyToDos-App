import React, { createContext, useReducer } from "react";

export const TodoContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "edit":
      return {
        ...state,
        editIndex:null,
        todos: state.todos.map((todo,index)=>{
            return index === action.payload.index ? {
                title:action.payload.title,
                description:action.payload.description
            } : todo
        })
      };
    case "delete":
      return {
        ...state,
        todos: state.todos.filter((todo,index)=> index !== action.payload.index)
      };
    case "updateEditIndex":
        return {
            ...state,
            editIndex:action.index
        }
    default:
      return state;
  }
};

const TodoProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { todos: [], editIndex : null});
  console.log("state=>", state);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
