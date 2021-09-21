import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";

import { TaskListItem } from "../../components/TaskListItem";
import {
  Header,
  Body,
  Title,
  TaskCounter,
  TextContainer,
  BoldCounter,
  InputContainer,
  CustomInput,
  CustomButton,
  RightArrowIcon,
} from "./styles";
import { Alert } from "react-native";

const ASYNC_KEY = "@todo-app";

export interface Task {
  text: string;
  isChecked: boolean;
}

export function Home() {
  const [taskText, setNewTaskText] = useState("");
  const [tasks, setNewTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function loadData() {
      const inMemoryList = await retrieveStoredList();
      setNewTasks(() => inMemoryList);
    }
    loadData();
  }, []);

  async function handleNewTask() {
    if (!taskText) return;
    const taskExists = tasks.map((item) => item.text).includes(taskText);
    if (taskExists) {
      Alert.alert(
        "Taks already exists!",
        "this taksk already exists, please try to enter a new one",
        undefined,
        { cancelable: true }
      );
    } else {
      const newTask = { text: taskText, isChecked: false };
      setNewTasks((oldTasks) => {
        const updatedList = [...oldTasks, newTask];
        updateStoredList(updatedList);
        return updatedList;
      });
      setNewTaskText(() => "");
    }
  }

  function handleCheckTask(task: Task) {
    let newTaskList = [...tasks];
    let taskFound = newTaskList.find((item) => item.text === task.text);
    taskFound.isChecked = !taskFound.isChecked;
    setNewTasks(() => {
      updateStoredList(newTaskList);
      return newTaskList;
    });
  }

  async function handleRemoveTask(task: Task) {
    return Alert.alert(
      "Delete Task",
      `Are you sure you want to dele the task "${task.text}"?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            let newTaskList = tasks.filter((item) => item.text !== task.text);
            setNewTasks(() => {
              updateStoredList(newTaskList);
              return newTaskList;
            });
          },
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  }

  async function retrieveStoredList(): Promise<Task[]> {
    const inMemoryListString = await AsyncStorage.getItem(ASYNC_KEY);
    return JSON.parse(inMemoryListString);
  }

  async function updateStoredList(newList: Task[]): Promise<void> {
    try {
      let strigifiedList = JSON.stringify(newList);
      await AsyncStorage.setItem(ASYNC_KEY, strigifiedList);
    } catch (e) {
      alert("não foi possível atualizar a lista");
    }
  }

  return (
    <>
      <Header>
        <TextContainer>
          <Title>To.Do</Title>
          <TaskCounter>
            You have <BoldCounter>{tasks.length} tasks</BoldCounter>
          </TaskCounter>
        </TextContainer>
      </Header>
      <Body>
        <InputContainer>
          <CustomInput
            onChangeText={(text) => setNewTaskText(text)}
            value={taskText}
            placeholder="Enter a new task"
          ></CustomInput>
          <CustomButton onPress={handleNewTask}>
            <RightArrowIcon name="chevron-right"></RightArrowIcon>
          </CustomButton>
        </InputContainer>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.text}
          renderItem={({ item, index }) => (
            <TaskListItem
              text={item.text}
              isChecked={item.isChecked}
              checkTask={handleCheckTask}
              deleteTask={handleRemoveTask}
              bgColor={!!(index % 2)}
            ></TaskListItem>
          )}
        />
      </Body>
    </>
  );
}
