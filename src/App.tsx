import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import { NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

// screens


import Main from './screens/Main'

import Icon from 'react-native-vector-icons/AntDesign';

import AntDesign from 'react-native-vector-icons/AntDesign';
export type RootStackPramList = {
  Home: undefined;
  Details: {product: Product}
  Main:undefined
  Profile:undefined
  Search:undefined
  
}

const Stack = createNativeStackNavigator<RootStackPramList>()
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export type BottomTabParamList = {
  Main: undefined;
  Profile:undefined
  Search:undefined
};
const Tab = createBottomTabNavigator<BottomTabParamList>();

function TabNavigator(){
  return (
    <Tab.Navigator  screenOptions={{tabBarActiveTintColor:"red"
      ,
      tabBarInactiveTintColor:"black",
      tabBarLabelStyle:{
        fontSize:12
      },
      tabBarStyle:{
        height:60
      }
    }} >
      <Tab.Screen name='Main' component={Main} options={{tabBarActiveTintColor:"red" }
      }  
      
      
      ></Tab.Screen>
        <Tab.Screen name='Profile' component={Profile}  options={{tabBarActiveTintColor:"red" ,
       tabBarIcon: ({ size, color }) => (
  <Icon name="user" size={size} color={color} />
)

      }}   >


      </Tab.Screen>
          <Tab.Screen name='Search' component={Search}  ></Tab.Screen>

    </Tab.Navigator>
  )
}

const App = () => {
  return (
   <View>
    <Main></Main>
   </View>
  )
}

export default App

   {/* <Stack.Navigator initialRouteName='Main'>
         <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown:false}}
       
        />
       
            <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Product details",
          headerStyle:{backgroundColor:"black"}
        }}
        />
        <Stack.Screen name='Search'
        component={Search}  />
      </Stack.Navigator> */}