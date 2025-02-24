import React, { useState } from "react";

export default function TodoCard({
  todo, // This is the todo object passed from the parent
  index,
  handleDeleteTodo,
  handleEditTodo,
  handleCompleteTodo,
}) {
  const { text, isCompleted } = todo; // Destructure to access the properties
  const [completed, setCompleted] = useState(isCompleted);

  const completeTodo = () => {
    const newCompletedStatus = !completed;
    setCompleted(newCompletedStatus);
    handleCompleteTodo(index, newCompletedStatus); // Pass new status to the parent
  };

  return (
    <li className="todoItem">
      <button className="todo_items_left" onClick={completeTodo}>
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={34}
          height={34}
          stroke="#003366"
          fill={completed ? "#003366" : "#0d0d0d"}
        >
          <circle cx="11.998" cy="11.998" r="9.998" />
        </svg>

        <p style={completed ? { textDecoration: "line-through" } : {}}>{text}</p>
      </button>

      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="undefined"
          >
            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
          </svg>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="undefined"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </button>
      </div>
    </li>
  );
}
