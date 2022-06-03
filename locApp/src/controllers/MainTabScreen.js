import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useTheme} from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import EventScreen from '../screens/EventScreen';
import BlogsScreen from '../screens/BlogsScreen';
import Blog from '../screens/Blog';
import Participating from '../screens/Participating';
import ChatScreen from '../screens/ChatScreen';

const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const BlogStack = createNativeStackNavigator();
const EventStack = createNativeStackNavigator();

const MainTabScreen = () => {
  const Tab = createBottomTabNavigator();
  const {colors} = useTheme();
  const iconSize = 26;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          elevation: 20,
          height: 60,
          width: '100%',
          backgroundColor: colors.disabled,
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: colors.primary,
        tabBarLabelStyle: {
          marginBottom: 10,
          fontWeight: 'bold',
          width: 100,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo
              name="home"
              size={iconSize}
              color={focused ? colors.primary : colors.background}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo
              name="save"
              size={iconSize}
              color={focused ? colors.primary : colors.background}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Blogs"
        component={BlogStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo
              name="bookmarks"
              size={iconSize}
              color={focused ? colors.primary : colors.background}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person"
              size={iconSize}
              color={focused ? colors.primary : colors.background}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="Event" component={EventScreen} />
      <HomeStack.Screen name="Chat" component={ChatScreen} />
    </HomeStack.Navigator>
  );
};

const EventStackScreen = () => {
  return (
    <EventStack.Navigator screenOptions={{headerShown: false}}>
      <EventStack.Screen name="Part" component={Participating} />
    </EventStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
      <ProfileStack.Screen
        name="SignUp"
        children={() => <LoginScreen register={true} />}
      />
    </ProfileStack.Navigator>
  );
};

const BlogStackScreen = () => {
  return (
    <BlogStack.Navigator screenOptions={{headerShown: false}}>
      <BlogStack.Screen name="BlogMain" component={BlogsScreen} />
      <BlogStack.Screen name="BlogDetail" component={Blog} />
    </BlogStack.Navigator>
  );
};

export default MainTabScreen;
