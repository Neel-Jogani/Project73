import React from "react";
import { Image } from "react-native";
import ReadStoryScreen from "./screens/ReadStory";
import WriteStoryScreen from "./screens/WriteStory";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
 
  render() {
   
    return( 
      <SafeAreaProvider>
    <AppContainer />
    </SafeAreaProvider>
    )

   
  }
  
}


const TabNavigator = createBottomTabNavigator({
  Read: {
    screen: ReadStoryScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./assets/read.png")}
          style={{ width: 50, height: 50 }}
        />
      ),
      tabBarLabel: "Read Story"
    },
  },
  Write: {
    screen: WriteStoryScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./assets/write.png")}
          style={{ width: 50, height: 50 }}
        />
      ),
      tabBarLabel: "Write Story"
    },
  },
});

const AppContainer = createAppContainer(TabNavigator);