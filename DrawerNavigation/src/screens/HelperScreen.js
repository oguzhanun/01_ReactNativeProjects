import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Header } from "react-native-elements";
import MenuIcon from "../components/MenuIcon"
import HomeIcon from "../components/HomeIcon"


const HelperScreen = () => {

  let headerHeight
  
  if(Dimensions){
    headerHeight = Math.round(Dimensions.get("window").height/100*10)
    
  } else headerHeight = 50

  console.log(headerHeight)

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Header
        containerStyle={{
                
          height: headerHeight
        }}
        leftComponent={<MenuIcon/>}
        centerComponent={{ text: "HELPER", style: { color: "#fff" } }}
        rightComponent={<HomeIcon/>}
      />
      <View>
        <Text>This is HelperScreen...</Text>
      </View>
    </SafeAreaView>
  )
}

HelperScreen.navigationOptions = {
  title: "Helper",
  headerTitle: "Helper Screen"
}

const styles = StyleSheet.create({
  container: {
    marginTop: "10%", //This also works...
    paddingLeft: 25
  }
});

export default HelperScreen;
