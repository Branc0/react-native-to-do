import styled from 'styled-components';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

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
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
`

