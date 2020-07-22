import React from "react"
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import HomeScreen from "./src/screens/HomeScreen"
import SecondScreen from "./src/screens/SecondScreen"


const navigator = createStackNavigator({
  Home : HomeScreen,
  Second : SecondScreen
},{
  headerMode : "float"
})


export default createAppContainer(navigator)