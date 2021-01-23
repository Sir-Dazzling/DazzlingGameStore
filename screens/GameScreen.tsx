import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import styled from 'styled-components/native';
import Text from '../components/Text';

export default function GameScreen({ route, navigation }: any)
{
    const { game } = route.params;

    const renderStars = () =>
    {
        let stars = [];

        for (let s = 1; s <= 5; s++)
        {
            stars.push(
                <Ionicons key={s} name="ios-star" size={14} style={{
                    marginRight: 5
                }}
                    color={Math.floor(game.rating) >= s ? "#819ee5" : "#434958"} />
            );
        }

        return <Stars>{stars}</Stars>
    };

    return (
        <GameContainer>
            <StatusBar barStyle="light-content" />

            <GameArtContainer>
                <GameArt source={game.cover} />
                <BackButton>
                    <Ionicons name="ios-close" size={40} color="#ffffff" />
                </BackButton>
            </GameArtContainer>

            <GameInfoContainer>
                <GameThumbContainer>
                    <GameThumb source={game.cover} />
                </GameThumbContainer>

                <GameInfo>
                    <Text bolder medium>{game.title}</Text>
                    <Text color="#9a9a9a">{game.teaser}</Text>
                </GameInfo>

                <Download>
                    <Ionicons name="md-cloud-download" size={24} color="#ffffff" />
                </Download>
            </GameInfoContainer>

            <GameStatsContainer>
                {renderStars()}
                <Text bolder color="#9a9a9a">{game.rating}</Text>
                <Text bold color="#9a9a9a">{game.category[0]}</Text>
                <Text bold color="#9a9a9a">{game.age}</Text>
                <Text bold color="#9a9a9a">Game of the day</Text>
            </GameStatsContainer>
        </GameContainer>
    );
}

const GameContainer = styled.View`
    background-color: #343434;
    flex: 1;
`;

const GameArtContainer = styled.View`
    position: relative;
`;

const GameArt = styled.Image`
    height: 350px;
    width: 100%;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
`;

const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 48px;
    left: 16px;
`;

const GameInfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 16px 0;
    margin: 6px 16px;
`;

const GameThumbContainer = styled.View`
    shadow-color: #000000;
    shadow-offset: 1px 1px;
    shadow-opacity: 0.5;
    shadow-radius: 2px;
`;

const GameThumb = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 16px;
`;

const GameInfo = styled.View`
    width: 0;
    flex-grow: 1;
    margin: 0 8px 0 16px;
`;

const Download = styled.View`
    background-color: #819ee5;
    width: 48px;
    height: 48px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

const GameStatsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 16px;
`;

const Stars = styled.View`
    flex-direction: row;
`;