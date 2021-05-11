import React from 'react';
import './style.css';

export default function App() {
  const [tasks, setTasks] = React.useState(['go home', 'finish test']);
  const [content, setContent] = React.useState('');

  const handleAdd = () => {
    if (content.trim().length) {
      setTasks([...tasks, content]);
      setContent('');
    }
  };

  const handleDelete = index => {
    const newTasks = tasks.filter((task, i) => index !== i);
    setTasks(newTasks);
  };

  const handleMove = (index, direction) => {
    if (direction === 'up') {
      const task = tasks.find((t, i) => index === i);
      const nextIndex = index - 1;
       if(nextIndex < 0) {
        return;
      }
      const newTasks = tasks;
      newTasks[index] = tasks[nextIndex]
      newTasks[nextIndex] = task;
      setTasks([...newTasks]);
    } else {
       const task = tasks.find((t, i) => index === i);
        const nextIndex = index + 1;
        if(nextIndex > tasks.length - 1) {
          return;
        }
      const newTasks = tasks;
      newTasks[index] = tasks[nextIndex]
      newTasks[nextIndex] = task;
      setTasks([...newTasks]);
    }
  };

  return (
    <div>
      <input
        value={content}
        name="content"
        onChange={e => setContent(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      {tasks.map((task, index) => {
        return (
          <>
            <p>{task}</p>
            <button onClick={() => handleDelete(index)}>delete</button>
            <button onClick={() => handleMove(index, 'up')}>Move Up</button>
            <button onClick={() => handleMove(index, 'down')}>Move down</button>
          </>
        );
      })}
    </div>
  );
}
