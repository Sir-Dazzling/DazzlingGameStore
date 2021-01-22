import * as React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Text from '../components/Text';

export default function HomeScreen()
{
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Text bolder center>Yoooo Styled Components in react native</Text>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background-color: #343434;
`
