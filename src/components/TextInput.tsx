import { useState } from "react";
import {  StyleSheet, Text, TextInput, View } from "react-native";

export default function TextInputComponent(){
    const [value,setValue] = useState('')
    console.log(value)
    return(
        <View style={styles.container}>
            
            <Text style={styles.headerText}>Text Input Component</Text>
            <TextInput placeholder="Type Some Thing" style={styles.input} onChangeText={setValue} value={value} editable={true} focusable={true}/>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
    },

    headerText:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20,
        marginTop:20,
        textDecorationLine:'underline'
    },
    input:{
        height:50,
        borderColor:'grey',
        borderWidth:1,

        paddingHorizontal:10,
        marginBottom:10,
    }
})