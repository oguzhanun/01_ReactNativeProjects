import React from "react"
import {createAppContainer} from "react-navigation"
import {createDrawerNavigator} from "react-navigation-drawer"
import HomeScreen from "./src/screens/HomeScreen"
import HelperScreen from "./src/screens/HelperScreen"



const navigator = createDrawerNavigator(
  {
    Home : HomeScreen,
    Helper : HelperScreen
  }
)

export default createAppContainer(navigator)