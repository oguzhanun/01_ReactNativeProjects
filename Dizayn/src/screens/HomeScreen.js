import React, {useState} from "react"
import {Text, View, TextInput, StyleSheet, TouchableOpacity,Picker,Slider} from "react-native"
import SafeAreaView from "react-native-safe-area-view"



const HomeScreen = ({navigation}) => {

    const [input, setInput] = useState("")
    
    const [bestCaptain, setBestCaptain] = useState("")
    
    const [slider, setSlider] = useState()

    return(  
        <SafeAreaView style={styles.container} forceInset={{top:"always"}}>
            <View >
                <TouchableOpacity onPress={()=>navigation.navigate("Second")}>
                    <Text>
                        Hello World...
                    </Text>
                    <TextInput selectTextOnFocus={true} style={styles.inputOne} value={input} onChangeText={(text)=>{setInput(text)}}/>
                </TouchableOpacity>

                <Picker selectedValue={ bestCaptain } style={{ height : 200,
                    width: 300 }}
                    onValueChange={ (inValue, inIndex) => setBestCaptain(inValue) }
                    >
                        {/* label is the thing we see on the screen, value is the arguement */}
                    <Picker.Item label="James Kirk" value="james_kirk" /> 
                    <Picker.Item label="John Sheridan" value="john_sheridan" />
                    <Picker.Item label="Han Solo" value="han_solo" />
                    <Picker.Item label="Ahab" value="ahab" />
                </Picker>
                <Slider style={{ width : "75%" }} step={ 10 } minimumValue={ 20 }
                    maximumValue={ 84 } value={ slider }
                    onValueChange={ inValue => setSlider( inValue )}
                />
                {/* <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
                    <Text>Inside</Text>
                </ImageBackground> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        borderWidth : 5,
        borderColor : "red"
    },
    inputOne : {
        borderColor : "gray",
        borderWidth : 1,
        width:"50%"
    }
})

HomeScreen.navigationOptions = {
    headerTitle : "Dizayn",
    headerTitleContainerStyle:{
        flex:1,
        borderColor:"red",
        borderWidth:5,
        justifyContent:"center"
    }
}

export default HomeScreen