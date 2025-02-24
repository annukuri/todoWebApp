import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TODOHero from "./Components/TODOHero";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  // Initialize todos as an empty array, not an empty string
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  // Function to persist todos in localStorage
  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  // Function to add a new todo to the list
  function handleAddTodos(newTodo) {
    // New todo should be an object with text and isCompleted properties
    const newTodoList = [...todos, { text: newTodo, isCompleted: false }];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  // Function to delete a todo from the list
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  // Function to edit an existing todo
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited.text); // Store only the text to be edited
    handleDeleteTodo(index); // Delete the todo before editing
  }

  // Function to mark a todo as completed or incomplete
  function handleCompleteTodo(index, isCompleted) {
    const newTodoList = todos.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, isCompleted } : todo
    );
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  // Load todos from localStorage on component mount
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      const parsedTodos = JSON.parse(localTodos).todos;
      setTodos(parsedTodos);
    }
  }, []);

  // Calculate total todos and completed todos
  const total_todos = todos.length;
  const todos_completed = todos.filter((todo) => todo.isCompleted).length;

  return (
    <>
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        todos={todos}
      />
      <Footer />
    </>
  );
}

export default App;
