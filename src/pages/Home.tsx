import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== '') {
      const newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      }

      setTasks([ ...tasks, newTask])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}