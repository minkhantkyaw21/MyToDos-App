import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "./Context/TodoProvider";
import "./Form.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDesription] = useState("");
  const { state, dispatch } = useContext(TodoContext);

  const onSubmitHandler = () => {
    if (state.editIndex !== null) {
      dispatch({
        type: "edit",
        payload: {
          title,
          description,
          index: state.editIndex,
        },
      });
    } else {
      dispatch({
        type: "add",
        payload: {
          title,
          description,
        },
      });
    }

    setTitle("");
    setDesription("");
  };

  useEffect(() => {
    if (state.editIndex !== null) {
      setTitle(state.todos[state.editIndex].title);
      setDesription(state.todos[state.editIndex].description);
    }
  }, [state.editIndex, state.todos]);
  return (
    <div className="todo-form">
      <h1>My ToDos</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Please enter title.."
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDesription(e.target.value)}
        placeholder="Please enter description.."
      />
      <button type="submit" onClick={onSubmitHandler}>
        Submit
      </button>
    </div>
  );
};

export default Form;
