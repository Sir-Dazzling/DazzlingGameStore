import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import styled from 'styled-components/native';
import Text from '../components/Text';
import Games from '../data/game_data';

export default function LiveScreen()
{
  return (
    <Container>
      <StatusBar style="light" />

      <Header>
        <Text large bold>Streaming</Text>

        <SearchContainer>
          <Search
            placeholder="Search live streams or games..."
            placeholderTextColor="#838383" />
          <SearchIcon>
            <Entypo name="magnifying-glass" size={24} color="#838383" />
          </SearchIcon>
        </SearchContainer>
      </Header>

      <SectionContainer>
        <Text medium bold>Popular Games</Text>

        <PopularGames horizontal={true} showsHorizontalScrollIndicator={false}>
          {Games.map((game, index) =>
          {
            return (
              <PopularGameContainer key={index}>
                <PopularGame source={game.cover} />
              </PopularGameContainer>
            );
          })}
        </PopularGames>
      </SectionContainer>

      <SectionContainer>
        <LiveGamesTitle>
          <Text medium bold>Live Now</Text>
          <Text bold color="#819ee5">View all</Text>
        </LiveGamesTitle>
      </SectionContainer>

      <LiveGames
        data={Games}
        // showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }: any) =>
        (
          <LiveGameContainer>
            <LiveGame source={item.cover} />
            <LiveGameOver>
              <LiveGameTitle>
                <Text small bold>{item.title}</Text>
              </LiveGameTitle>
              <LiveGameBadge>
                <Text small bold>Live</Text>
              </LiveGameBadge>
            </LiveGameOver>
          </LiveGameContainer>
        )} />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  background-color: #343434;
  flex: 1;
`;

const Header = styled.View`
  margin: 32px 16px 0 16px;
`;

const SearchContainer = styled.View`
  position: relative;
  margin: 32px 8px;
  background-color: #494840;
  border-radius: 100px;
  justify-content: center;
`;

const Search = styled.TextInput`
  padding: 16px 64px 16px 32px;
  color: #c6c6c6;
`;

const SearchIcon = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

const SectionContainer = styled.View`
  margin: 0 16px;
`;

const PopularGames = styled.ScrollView`
  margin: 16px 0 16px -16px;
`;

const PopularGameContainer = styled.View`
  width: 80px;
  margin: 0 16px;
`;

const PopularGame = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

const LiveGamesTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LiveGames = styled.FlatList`
  flex: 1;
  margin: 16px 16px 0 16px;
`;

const LiveGameContainer = styled.View`
  position: relative;
`;

const LiveGame = styled.Image`
  width: 100%;
  height: 275px;
  margin-bottom: 16px;
  border-radius: 12px;
`;

const LiveGameOver = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  top: 8px;
  right: 16px;
`;

const LiveGameTitle = styled.View`
  background-color: #819ee5;
  border-radius: 4px;
  padding: 2px 4px;
  margin-right: 4px;
`;

const LiveGameBadge = styled.View`
  background-color: #e54949;
  border-radius: 4px;
  padding: 2px 8px;
`;