import styled from 'styled-components/native/';
import colors from '../system/colors';
import { Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

export const Header = styled.View`
  background-color: ${colors.BLUE};
  width:100%;
  height: ${height/3}px;
  padding-top:30px;
  padding-left:15px;
  padding-right:15px;
  flex-direction: row;
  top: 0;
  position:absolute;
  z-index:10;
`;



export const Avatar = styled.Image`
  width:60px;
  height:60px;
  border-radius:10px;
  border-color:${colors.WHITE};
  border-width: 2px ;

`

export const Username = styled.Text`
  color: ${colors.WHITE};
  font-size:18px;
`

export const Welcome = styled.Text`
  font-size: 14px;
  color: ${colors.WHITE}
`;
export const UserInfo = styled.View`
  padding: 5px 15px;
`;

export const BalanceContainer = styled.View`
  flex:1;
  align-items: flex-end;
`;

export const Balance = styled.Text`
  color: ${colors.WHITE};
  font-size:18px;
`

export const BalanceTitle = styled.Text`
  color: ${colors.WHITE};
  font-size:16px;
  
`;