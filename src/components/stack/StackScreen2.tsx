import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Button, Text, View } from "react-native"
import { StackDemoParamList } from "./StackNavigationDemo"
import React from "react"


type StackScreen2NavigationProp = StackNavigationProp<StackDemoParamList,"StackScreen2">
const StackScreen2:React.FC=()=>{

    const navigation = useNavigation<StackScreen2NavigationProp>()
    return(
        <View>
            <Text>Stack Screen 2</Text>
            <Button title="Go to Stack Screen 2"/>
        </View>
    )
}

export default StackScreen2