import React, { Component } from "react";
import { View, Text,Button,TextInput, StyleSheet, Image, TouchableHighlight} from "react-native"; 
import {ImageBackground} from 'react-native';  
class Main extends Component {
    static navigationOptions = {
        header: null
    }
    render() {     
        return (    
            <ImageBackground source={require("./d.jpg")} style={{width:'100%',height:'100%'}}>
                
                <View style={styles.box}>
                <Image 
            			style={styles.gambar} 
            			source={require("./dailynote.png")} 
            			resizeMode = "stretch" 
        			/> 
                </View>
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('MenuDailyA') }>
                        <Text style={styles.txtBox2}>Daily Activity</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('MenuDailyC') }>
                        <Text style={styles.txtBox2}>Daily Campus</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.box2}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('Login') }>
                        <Text style={styles.txtBox2}>Logout</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
            
        );   
    } 
}   

   const styles = StyleSheet.create({
    vHeader: {
        flex: 1,
        //backgroundColor: '#f9f9ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        flex: 0.7,
        //backgroundColor: '#f9f9ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        flex: 0.2,
        margin:20,
        flexDirection: 'row',
        //backgroundColor: '#f9f9ff',
        justifyContent: 'center',
        
    },
    box2: {
        flex: 0.2,
        margin:20,
        flexDirection: 'row',
        //backgroundColor: '#f9f9ff',
        justifyContent: 'center',
        marginBottom: 150,
    },
    txtBox2: {
        color: 'black',
        alignItems: 'center',
        fontSize: 18
    },
    gambar:{
        height: 150,
        width: 150,
    },
    txtBox1: {
        width: 160,
        height: 50,
        backgroundColor: '#f9f9ff',
        borderWidth: 1,
        borderColor: '#f9f9ff',
        alignItems: 'center',
        justifyContent: 'center', 
      },
    textBox2:{
        color: '#f9f9ff',
        fontSize: 15,    
      },
    BoxStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f9f9ff',
      borderRadius: 5,
      padding:20,
      margin:10,
      width: '80%',
      height: 50, 
    }
});

export default Main;