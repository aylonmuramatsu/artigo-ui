import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import colors from '../system/colors';

const screenY = Dimensions.get('window').height;

export const Container = styled.View`
  height: 100px;
  width: 120px;
  margin: 0 15px;
  border-radius: 15px;
  padding:10px 15px;
  background-color: ${colors.WHITE};
  shadow-color: #323232;
  shadow-offset: 0 0;
  shadow-opacity: .5;
  shadow-radius: 12px;
  elevation: 5;
`;

export const BankTitle = styled.Text`
  font-size: 12px;
  color: ${colors.BLUE};
  font-weight:bold;
`;

export const BankInfo = styled.View`

`;

export const BankInfoAccount = styled.Text`
  font-size: 11px;
  color: ${colors.ORANGE}
`;

export const BankInfoBalance = styled.Text`
  padding-top:5px;
  font-size:12px;
  color: ${colors.BLUE};
  font-weight:bold;
`;