import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
export const TransactionList = styled.FlatList`
  padding-top:20px;
  max-height:${height - ((height/2) - 20)}px;
`;