import React, { useState } from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
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

export function Home() {
  const [task, setNewTask] = useState("");
  const [tasks, setNewTasks] = useState([]);

  function handleNewTask() {
    setNewTasks((oldTasks) => [...oldTasks, task]);
    setNewTask(() => "");
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
            onChangeText={(text) => setNewTask(text)}
            value={task}
            placeholder="Adicione uma tarefa"
          ></CustomInput>
          <CustomButton onPress={handleNewTask}>
            <RightArrowIcon name="chevron-right"></RightArrowIcon>
          </CustomButton>
        </InputContainer>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </Body>
    </>
  );
}
