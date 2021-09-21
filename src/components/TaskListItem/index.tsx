import React from "react";
import CheckBox from "@react-native-community/checkbox";

import {
  CustomClickArea,
  Icon,
  TaskContainer,
  TaskText,
  TrashButton,
} from "./style";
import { Task } from "../../screens/Home";

interface TaskListItemProps {
  isChecked: boolean;
  text: string;
  bgColor: boolean;
  checkTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

export function TaskListItem({
  isChecked,
  text,
  bgColor,
  checkTask,
  deleteTask,
}: TaskListItemProps) {
  return (
    <TaskContainer hasBg={bgColor}>
      <CustomClickArea onPress={() => checkTask({ text, isChecked })}>
        <CheckBox value={isChecked} />
        <TaskText state={isChecked}>{text}</TaskText>
      </CustomClickArea>

      <TrashButton onPress={() => deleteTask({ text, isChecked })}>
        <Icon name="trash" />
      </TrashButton>
    </TaskContainer>
  );
}
