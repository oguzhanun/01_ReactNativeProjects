import React, {useRef} from "react"
import {StyleSheet, Text, View, TouchableOpacity,Dimensions,ScrollView, Image} from "react-native"
import SafeAreaView from "react-native-safe-area-view"

const SecondScreen = ({navigation}) => {
    const scroll = useRef(null)

    return (
        <SafeAreaView style={styles.container} forceInset={{top:"always"}}>
            <ScrollView ref={scroll} alwaysBounceVertical onScroll={()=>scroll.current.scrollTo({x:100})}>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    <Text>
                        This is SecondScreen...
                    </Text>
                </TouchableOpacity>
                <Image style={{width:800,height:300,borderColor:"red",borderWidth:5}} 
                        resizeMethod="auto"
                        source={{uri:"https://images.unsplash.com/photo-1576002553878-1026a15cf795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
                        onError={(error)=>console.log(error.nativeEvent.error)}        
                />
                <Image style={{width:800,height:300,borderColor:"red",borderWidth:5}} 
                        resizeMethod="auto"
                        source={{uri:"https://images.unsplash.com/photo-1576002553878-1026a15cf795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
                        onError={(error)=>console.log(error.nativeEvent.error)}        
                />
                <Image style={{width:800,height:300,borderColor:"red",borderWidth:5}} 
                        resizeMethod="auto"
                        source={{uri:"https://images.unsplash.com/photo-1576002553878-1026a15cf795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
                        onError={(error)=>console.log(error.nativeEvent.error)}        
                />
                <Image style={{width:800,height:300,borderColor:"red",borderWidth:5}} 
                        resizeMethod="auto"
                        source={{uri:"https://images.unsplash.com/photo-1576002553878-1026a15cf795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
                        onError={(error)=>console.log(error.nativeEvent.error)}        
                />
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

let w = Math.round(Dimensions.get("window").width)

console.log("w ::: ",w)

const styles = StyleSheet.create({
    container : {
        flex:1,
        borderWidth : 5,
        borderColor : "red"
    }
})

SecondScreen.navigationOptions = {
    headerTitle:"Dizayn",
    headerTitleContainerStyle:{
        flex:1,
        borderColor:"red",
        borderWidth:5,
        justifyContent:"space-evenly",
        position:"absolute",
        //width : w,
        //marginLeft : ,
        // left : "auto",
        // right : "auto"
        //marginRight : 56
        backgroundColor:"black"
    },
    headerTintColor:"white",
    // headerLeftContainerStyle:{
    //     borderColor : "blue",
    //     borderWidth : 5,
    //     width:0,

    // }
}

export default SecondScreen