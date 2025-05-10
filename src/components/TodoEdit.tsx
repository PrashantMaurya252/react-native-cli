import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Todo } from "../types";


interface TodoEditProps{
    todo:Todo
}

function TodoEdit(){
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}/>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.saveBtn}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cancelBtn}>
                    <Text style={styles.btnText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
    },
    input:{
        flex:1,
        borderColor:'#ccc',
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:5,
        marginRight:10
    },
    btnContainer:{
        flexDirection:'row',
    },
    saveBtn:{
        backgroundColor:'#4cd964',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        marginRight:5
    },
    cancelBtn:{
        backgroundColor:'#ff9500',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
    },
    btnText:{
        color:'#fff',
        fontSize:15
    }

})

export default TodoEdit