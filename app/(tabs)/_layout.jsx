import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons'; // import required icon sets

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons 
                name="home" 
                size={24} 
                color={focused ? 'blue' : 'gray'} 
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons 
                name="search" 
                size={24} 
                color={focused ? 'blue' : 'gray'} 
              />
            ),
          }}
        />
          <Tabs.Screen
          name="events"
          options={{
            title: "Upcoming Events",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome 
                name="calendar" 
                size={24} 
                color={focused ? 'blue' : 'gray'} 
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome 
                name="user" 
                size={24} 
                color={focused ? 'blue' : 'gray'} 
              />
            ),
          }}
        />
      
      </Tabs>
    </>
  );
};

export default TabsLayout;
