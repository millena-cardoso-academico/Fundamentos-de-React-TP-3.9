import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ tasks, newTask, setNewTask, handleAddTask }) => {
  return (
    <div className="todo-list-container">
      <h1>Minha Lista de Tarefas</h1>
      <div className="add-task-container">
        <input
          type="text"
          placeholder="Nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
        />
        <button className="add-btn" onClick={handleAddTask}>
          Adicionar
        </button>
      </div>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  newTask: PropTypes.string.isRequired,
  setNewTask: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
};

export default TodoList;
