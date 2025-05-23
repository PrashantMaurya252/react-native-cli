import { StyleSheet, Text, View } from "react-native";

function FlexLayout(){
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Layout Using Text</Text>
            <Text>Main Axis (Row)</Text>
            <View style={styles.rowContainer}>
                <View style={[styles.box,styles.redBox]}/>
                <View style={[styles.box,styles.blueBox]}/>
                <View style={[styles.box,styles.greenBox]}/>
            </View>

            <Text>Cross Axis (column)</Text>
            <View style={styles.columnContainer}>
                <View style={[styles.box,styles.redBox]}/>
                <View style={[styles.box,styles.blueBox]}/>
                <View style={[styles.box,styles.greenBox]}/>
            </View>
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
    rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15
    },
    box:{
        width:50,
        height:50
    },
    redBox:{
        backgroundColor:'red',
    },
    blueBox:{
        backgroundColor:'blue',
    },
    greenBox:{
        backgroundColor:'green',
    },

    columnContainer:{
        flexDirection:'column',
        height:200,
        justifyContent:'space-between',
        marginBottom:20
    }
})

export default FlexLayout