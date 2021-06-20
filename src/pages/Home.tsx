import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export interface IThemeColorProps {
  background: string;
  secondaryBackground: string;
  smoothBackground: string;

  primary: string;
  secondary: string;

  text: string;
  secondaryText: string;
  hoverText: string;

  title: string;
  secondTitle: string;

  success: string;
}

export interface IColorsOfTheme {
  themeName: string;
  colors: IThemeColorProps
}

export function Home() {
  const [isDarkThemeOn, setIsDarkThemeOn] = useState(true);
  const [colorsOfTheme, setColorsOfTheme] = useState<IColorsOfTheme>({
    themeName: 'main',
    colors: {
      background: '#fff',
      secondaryBackground: '#F5F4F8',
      smoothBackground: 'rgba(25, 61, 223,.1)',

      primary: '#273FAD',
      secondary: '#3FAD27',

      text: '#3D3D4D',
      secondaryText: '#fff',
      hoverText: '#A09CB1',

      title: '#fff',
      secondTitle: '#3D3D4D',

      success: '#273FAD',
    }
  });
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (isDarkThemeOn) {
      setColorsOfTheme({
        themeName: 'dark',
        colors: {
          background: '#1F1F1F',
          secondaryBackground: '#34313D',
          smoothBackground: 'rgba(68, 71, 90, 0.1)',
    
          primary: '#483C67',
          secondary: '#988BC7',
    
          text: '#67E480',
          secondaryText: '#A09CB1',
          hoverText: '#E1E1E6',

          title: '#E1E1E6',
          secondTitle: '#67E480',

          success: '#67E480',
        }
      })
    } else {
      setColorsOfTheme({
        themeName: 'main',
        colors: {
          background: '#fff',
          secondaryBackground: '#F5F4F8',
          smoothBackground: 'rgba(25, 61, 223, 0.1)',
    
          primary: '#273FAD',
          secondary: '#3FAD27',
    
          text: '#fff',
          secondaryText: '#A09CB1',
          hoverText: '#A09CB1',

          title: '#fff',
          secondTitle: '#3D3D4D',

          success: '#273FAD',
        }
      })
    }
  }, [isDarkThemeOn]);

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
    <View style={[styles.container, { backgroundColor: colorsOfTheme.colors.background } ]}>
      <Header
        colorsOfTheme={colorsOfTheme}
        isDarkThemeOn={isDarkThemeOn}
        setIsDarkThemeOn={setIsDarkThemeOn}
      />

      <TodoInput
        addTask={handleAddTask}
        isDarkThemeOn={isDarkThemeOn}
        colorsOfTheme={colorsOfTheme}
      />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
        colorsOfTheme={colorsOfTheme}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  darkMode: {
    backgroundColor: '#1F1F1F'
  }
})