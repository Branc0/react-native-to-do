import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from "react-native-gesture-handler";


interface TextProps {
    state: boolean;
}


export const TaskContainer = styled.View`
    height: 48px;
    padding: 24px;
    flex-direction: row;
    align-items: center;
    background: white;
    justify-content: space-between;
    /* background-color: linear-gradient(right, red , yellow); */
`

export const CustomClickArea = styled(BorderlessButton)`
    flex-direction: row;
    align-items: center;
`

export const TaskText = styled.Text<TextProps>`
    margin-left: 16px;
    font-size: 14px;
    text-decoration: ${({ state }) => state === true && 'line-through'};
    color: ${({ state, theme }) => state === true ? theme.colors.success : theme.colors.text};
`

export const TrashButton = styled(BorderlessButton)`
    margin-left: auto;
    width: 48px;
    align-items: flex-end;
`

export const Icon = styled(Feather)`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.icon};
`
