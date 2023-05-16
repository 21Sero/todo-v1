import {useState} from "react";
import './styles/App.css';
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import TodoFooter from "./components/todoFooter/TodoFooter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'Learn JS',
      isCompleted: true
    },
    {
      id: Math.random(),
      text: 'Learn React',
      isCompleted: true
    },
    {
      id: Math.random(),
      text: 'Learn Next',
      isCompleted: false
    },
    {
      id: Math.random(),
      text: 'Learn TypeScript',
      isCompleted: false
    },

  ]);



  return (
    <div className="App">
      <TodoForm onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ])
      }}/>
    <TodoList
    todos={todos}
    onDelete = {(todo) => {
      setTodos(todos.filter((t) => t.id !== todo.id))
    }}
    onChange = {(newTodo) => {
     setTodos(todos.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo
        }
        return todo
      }))
    }}
    />
    <TodoFooter todos={todos} onClickCompleted={() => {
      setTodos(todos.filter((todo) => !todo.isCompleted));
    }}/>
    </div>
  );
}

export default App;