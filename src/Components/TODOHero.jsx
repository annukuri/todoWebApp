import "./TODOHero.css";
function TODOHero({ todos_completed, total_todos }) {
  return (
    <section className="todohero_section">
      <div>
        <p className="text_large">Task Done</p>
        <p className="text_small">Keep it up</p>
      </div>
      <div className="text">
        {todos_completed}/{total_todos}
      </div>
    </section>
  );
}

export default TODOHero;
