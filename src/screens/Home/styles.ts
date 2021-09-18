import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

export const Header = styled.View`
    height: ${RFValue(150)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 0 ${RFValue(24)}px;
    padding-top: ${RFValue(46)}px;
`

export const TextContainer = styled.View`
    margin-top: ${RFValue(18)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
`

export const TaskCounter = styled.Text`
    font-size: ${RFValue(15)}px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
`

export const BoldCounter = styled.Text`
    font-weight: bold;
`

export const Body = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const InputContainer = styled.View`
    width: 100%;
    padding: 0 ${RFValue(24)}px;
    transform: translateY(-${RFValue(28)}px);
`

export const CustomInput = styled.TextInput`
    height: ${RFValue(56)}px;
    border-radius: 5px;
    width:100%;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0 ${RFValue(20)}px;
`

export const CustomButton = styled(RectButton)`
    height: 100%;
    width: 56px;
    position: absolute;
    right: ${RFValue(24)}px;
    align-items: center;
    justify-content: center;
    border: 1px solid #B2B2B2;
`

export const RightArrowIcon = styled(Feather)`
    font-size: 32px;
    color: ${({ theme }) => theme.colors.icon};
`
