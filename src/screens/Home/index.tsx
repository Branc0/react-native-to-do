import React, { useState } from "react";
import { Text } from "react-native";
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

export interface Task {
  text: string;
  isChecked: boolean;
}

export function Home() {
  const [taskText, setNewTaskText] = useState("");
  const [tasks, setNewTasks] = useState<Task[]>([]);

  function handleNewTask() {
    if (taskText) {
      const newTask = { text: taskText, isChecked: false };
      setNewTasks((oldTasks) => [...oldTasks, newTask]);
      setNewTaskText(() => "");
    }
  }

  function handleCheckTask(task: Task) {
    let newTasks = [...tasks];
    let taskFound = newTasks.find((item) => item.text === task.text);
    taskFound.isChecked = !taskFound.isChecked;
    setNewTasks(() => newTasks);
  }

  function handleRemoveTask(task: Task) {
    let newTaskList = tasks.filter((item) => item.text !== task.text);
    setNewTasks(() => newTaskList);
  }

  return (
    <>
      <Header>
        <TextContainer>
          <Title>To.Do</Title>
          <TaskCounter>
            Você tem <BoldCounter>{tasks.length} tarefas</BoldCounter>
          </TaskCounter>
        </TextContainer>
      </Header>
      <Body>
        <InputContainer>
          <CustomInput
            onChangeText={(text) => setNewTaskText(text)}
            value={taskText}
            placeholder="Adicione uma tarefa"
          ></CustomInput>
          <CustomButton onPress={handleNewTask}>
            <RightArrowIcon name="chevron-right"></RightArrowIcon>
          </CustomButton>
        </InputContainer>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.text}
          renderItem={({ item }) => (
            <TaskListItem
              text={item.text}
              isChecked={item.isChecked}
              checkTask={handleCheckTask}
              deleteTask={handleRemoveTask}
            ></TaskListItem>
          )}
        />
      </Body>
    </>
  );
}
