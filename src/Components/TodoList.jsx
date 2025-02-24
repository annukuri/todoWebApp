import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({
  handleDeleteTodo,
  handleEditTodo,
  handleCompleteTodo,
  todos,
}) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoCard
          key={index}
          index={index}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </ul>
  );
}
