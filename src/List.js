import React, { useContext } from "react";
import { TodoContext } from "./Context/TodoProvider";
const List = () => {
  const { state, dispatch } = useContext(TodoContext);

  const updateHandler = (index) => {
    dispatch({
      type: "updateEditIndex",
      index,
    });
  };
  const deleteHandler = (index) => {
    dispatch({
      type: "delete",
      payload: {
        index,
      },
    });
  };
  return (
    <div>
      {state.todos.map((todo, index) => {
        return (
          <div className="list-group" key={index}>
            <h3>Title:{todo.title}</h3>
            <p>Description:{todo.description}</p>

            <button type="submit" onClick={() => updateHandler(index)}>
              Update
            </button>
            <button type="submit" onClick={() => deleteHandler(index)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
