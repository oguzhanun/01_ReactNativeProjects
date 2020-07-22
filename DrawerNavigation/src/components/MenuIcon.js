import React from "react"
import {MaterialIcons} from "@expo/vector-icons"
import {withNavigation} from "react-navigation"
import {View, TouchableOpacity} from "react-native"

const MenuIcon = ({navigation}) => {

    return(
        <View >
            <TouchableOpacity onPress={()=>{return navigation.openDrawer()}}>
                <MaterialIcons name="menu" color="white" size={28} />
            </TouchableOpacity>
        </View>
    )
}


export default withNavigation(MenuIcon)
