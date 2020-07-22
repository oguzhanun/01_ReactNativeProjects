import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import {Header} from "react-native-elements"
import MenuIcon from "../components/MenuIcon"


const HomeScreen = () => {
  
  let headerHeight
  
  if(Dimensions){
    headerHeight = Math.round(Dimensions.get("window").height/100*10)
    
  } else headerHeight = 50

  console.log(headerHeight)
  
  return (
    <SafeAreaView forceInset={{top:"always"}} >
        <Header
            containerStyle={{
              
              height: headerHeight
            }}
            leftComponent={<MenuIcon/>}
            centerComponent={{ text: "HOME", style: { color: "#fff" } }}
            // rightComponent={<HomeIcon/>}
            backgroundColor="red"
        />
      <View>
        <Text> This is HomeScreen... </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%", //This also works...
    paddingLeft: 20
  }
});

export default HomeScreen;
