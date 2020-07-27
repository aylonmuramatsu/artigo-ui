import styled from 'styled-components/native'
import colors from '../system/colors';

export const Container = styled.View`
  padding:15px 15px 15px 15px;
  background-color: ${colors.WHITE};
  margin:5px 0;
`;

export const Title = styled.Text`
  color: ${colors.MIDNIGHT_BLUE};
  width: 75%;
  font-size:15px;

`

export const CostTitle = styled.Text`
  font-size:15px;

`;

export const ContainerHeader = styled.View`
  flex-direction:row;
  justify-content: space-between;
  width: 100%;
`;