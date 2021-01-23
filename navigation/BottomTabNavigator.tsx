import { Entypo, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import styled from 'styled-components/native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import LiveScreen from '../screens/LiveScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { BottomTabParamList, TabOneParamList, TabThreeParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator()
{
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
        style: {
          backgroundColor: "#343434",
          borderTopColor: "#343434",
          paddingBottom: 12
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) =>
        {
          let iconName: string | any;

          switch (route.name)
          {
            case "Home":
              iconName = "home";
              break;

            case "Live":
              iconName = "game-controller";
              break;

            case "Profile":
              iconName = "user";
              break;

            default:
              iconName = "home";
              break;
          }

          return (
            <TabBarIconContainer focused={focused}>
              <Entypo name={iconName} size={24} color="#ffffff" />
            </TabBarIconContainer>
          );
        }
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={RootNavigator}
      />
      <BottomTab.Screen
        name="Live"
        component={LiveNavigator}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string })
{
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const RootStack = createStackNavigator<TabOneParamList>();

function RootNavigator()
{
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
          headerShown: false,
          headerStyle: {
            backgroundColor: "#343434",
          },
          headerTitleStyle: {
            color: "#ffffff",
          }
        }}

      />
    </RootStack.Navigator>
  );
}

const LiveStack = createStackNavigator<TabTwoParamList>();

function LiveNavigator()
{
  return (
    <LiveStack.Navigator>
      <LiveStack.Screen
        name="LiveScreen"
        component={LiveScreen}
        options={{
          headerTitle: 'Live',
          headerShown: false,
          headerStyle: {
            backgroundColor: "#343434"
          },
          headerTitleStyle: {
            color: "#ffffff"
          }
        }}
      />
    </LiveStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<TabThreeParamList>();

function ProfileNavigator()
{
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
};

const TabBarIconContainer = styled.View`
  background-color: ${(props: any) => (props.focused ? "#819ee5" : "#343434")};
  padding: 2px 16px;
  border-radius: 32px;
`;
