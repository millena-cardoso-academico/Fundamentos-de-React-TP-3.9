import { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState(['Comprar leite', 'Estudar React', 'Fazer exercício', 'Ler um livro']);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div>
      <TodoList
        tasks={tasks}
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
    </div>
  );
};

export default App;