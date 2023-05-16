import "./TodoFooter.css";

function TodoFooter ({todos, onClickCompleted}) {

    const completedSize = todos.filter((todo) => todo.isCompleted).length
   return (  <div className="todoAppFooter">
        <span> {completedSize}/{todos.length} Complited </span>
        <button className="todoClearCompleted" onClick={onClickCompleted}> Clear Complited</button>
    </div>
   )
}

export default TodoFooter;
