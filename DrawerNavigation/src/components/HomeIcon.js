import React from "react"
import {View, TouchableOpacity} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import { withNavigation } from "react-navigation"


const HomeIcon = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <MaterialIcons name="home" size={28} color="white"/>
            </TouchableOpacity>
        </View>
    )
}


export default withNavigation(HomeIcon)