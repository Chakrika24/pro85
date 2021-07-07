import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyBarter from '../screens/MyBarter';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  Setting : {
    screen : SettingScreen
  },
  ReceiverDetails : {
    screen : ReceiverDetailsScreen
  },
  Notification : {
    screen : NotificationScreen
  },
  Barters : {
    screen : MyBarter
  },
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
