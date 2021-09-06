import React from "react";
import {
  Header,
  Body,
  Title,
  TaskCounter,
  TextContainer,
  BoldCounter,
} from "./styles";

export function Home() {
  return (
    <>
      <Header>
        <TextContainer>
          <Title>To.Do</Title>
          <TaskCounter>
            Você tem <BoldCounter>3 tarefas</BoldCounter>
          </TaskCounter>
        </TextContainer>
      </Header>
      <Body></Body>
    </>
  );
}
