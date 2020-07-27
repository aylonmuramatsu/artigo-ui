import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenY = Dimensions.get('window').height;

export const Container = styled.ScrollView`
  max-height: ${screenY/6}px;
  margin:12px -20px 0px -20px;
`;