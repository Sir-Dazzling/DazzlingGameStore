import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Text from '../components/Text';
import CategoryList from '../data/categories';
import Games from '../data/game_data';

export default function HomeScreen({ navigation }: any)
{
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const gamesRef: any = useRef();

  const changeCategory = (category: string) =>
  {
    setSelectedCategory(category);
    // gamesRef.current.scrollToOffset({ animated: true, index: 0 });
  };

  const GameItem = (game: any) =>
  {
    return (
      <Game onPress={() =>
      {
        navigation.navigate("GameScreen", { game: game })
      }}>
        <GameCover source={game.cover} />
        <GameInfo backgroundColor={game.backgroundColor}>
          <GameImage source={game.cover} />
          <GameTitle>
            <Text large bold>{game.title}</Text>
            <Text small>{game.teaser}</Text>
          </GameTitle>
        </GameInfo>
      </Game>
    );
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header>
        <Text large>This is{" "}
          <Text large bolder>DazzlingGames,</Text>
          {`\n`}
          <Text large bold>Best games for today</Text>
        </Text>

        <Avatar source={require('../assets/images/game.png')} />
      </Header>

      <Categories horizontal={true} showsHorizontalScrollIndicator={false}>
        {CategoryList.map((category, index) =>
        {
          return (
            <Category key={index} onPress={() =>
            {
              changeCategory(category);
            }}>
              <CategoryName selected={
                selectedCategory === category ? true : false
              }>
                {category}
              </CategoryName>
              {selectedCategory === category && <CategoryDot />}
            </Category>
          );
        })}
      </Categories>

      <GamesList
        data={Games.filter((game) =>
        {
          return game.category.includes(selectedCategory) || selectedCategory === "All";
        })}
        KeyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }: any) => GameItem(item)}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 40px 32px 0 32px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

const Categories = styled.ScrollView`
  margin-top: 32px;
  flex-grow: 0;
`;

const Category = styled.TouchableOpacity`
  align-items: center;
  margin: 0 16px;
  height: 32px;
`;

const CategoryName = styled(Text)`
  color: ${(props: any) => (props.selected ? "#819ee5" : "#9c9c9c")};
  font-weight: ${(props: any) => (props.selected ? "700" : "500")};
`;

const CategoryDot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #819ee5;
`;

const GamesList = styled.FlatList`
  margin-top: 32px;
  flex: 1;
`;

const Game = styled.TouchableOpacity`
  margin-bottom: 32px;
`;

const GameCover = styled.Image`
  height: 300px;
  width: 100%;
`;

const GameInfo = styled.View`
  margin: -50px 16px 0 16px;
  padding: 16px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`;

const GameImage = styled.Image`
  width: 50px;
  height: 40px;
  border-radius: 4px;
`;

const GameTitle = styled.View`
  margin: 0 24px;
`;
