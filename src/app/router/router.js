import React from 'react';

import {
  BackHandler,
} from 'react-native';

import HomeScreen from "../NativeHome";
import TestScreen from "../../screenHome"


import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator, 
  createAppContainer,
  createStackNavigator,
  StackNavigator,NavigationActions,HeaderBackButton ,createSwitchNavigator} from 'react-navigation';


const HomeStack = createStackNavigator({
  Home: {screen: HomeScreen,
  navigationOptions:{
    title: 'Home',
    headerVisible:false,
    headerBackTitle: 'A much too long text for back button from B to A',
    
    
  } 
},


});

const TestStack = createStackNavigator({
  Test:{screen:TestScreen,
    navigationOptions: ({navigation}) => ({
      headerVisible:true,
      headerLeft:<HeaderBackButton onPress={_ => navigation.navigate("Home")}/>

     
      })
  
    
  
  
  
  },

})



export const MainStack = 
      createBottomTabNavigator({
      Home: {screen: HomeStack,
        navigationOptions:{
          title: 'Home',
          headerVisible:false,
          headerBackTitle: 'A much too long text for back button from B to A',
          
          
        } 
      },
      Test: {screen:TestStack,
        navigationOptions:{
            headerLeft: (<HeaderBackButton onPress={_ => navigation.navigate("Home")}/>)
        }
      
      
      
      },
     
    });


  
  
  

  

    



export const AppNavigator = createSwitchNavigator({
  Home: HomeStack,
  Test: TestStack,
   
});
const App = createAppContainer(AppNavigator);

export default App;