import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import colors from '../system/colors';

const height = Dimensions.get('window').height;

export const Container = styled.View`
  position:relative;
  flex:1;
  width:100%;
  z-index:5;
  top: ${(height/4) - 50}px;
  padding:0 20px;
`

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.WHITE};
  font-weight: bold;
`