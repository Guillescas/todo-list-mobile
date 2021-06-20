import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { IColorsOfTheme } from '../pages/Home';

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  colorsOfTheme: IColorsOfTheme;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  colorsOfTheme,
}: MyTasksListProps) {
  function FlatListHeaderComponent() {
    return (
      <View>
        <Text style={[styles.header, { color: colorsOfTheme.colors.secondTitle }]}>Minhas tasks</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={[
              item.done ?
              [styles.taskButtonDone, { backgroundColor: colorsOfTheme.colors.smoothBackground }] : 
              styles.taskButton,
            ]}
          >
            <View 
              testID={`marker-${index}`}
              style={
                item.done ?
                [
                  styles.taskMarkerDone,
                  { backgroundColor: colorsOfTheme.colors.success }
                ] : 
                [
                  styles.taskMarker,
                ]
              }
            />
            <Text 
              style={
                item.done ? 
                [styles.taskTextDone, { color: colorsOfTheme.colors.secondaryText }] : 
                { color: colorsOfTheme.colors.secondTitle }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    textDecorationLine: 'line-through'
  }
})