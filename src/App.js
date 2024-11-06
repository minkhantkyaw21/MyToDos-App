import "./App.css";
import TodoProvider from "./Context/TodoProvider";
import Form from "./Form";
import List from "./List";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Form />
        <List />
      </div>
    </TodoProvider>
  );
}

export default App;
