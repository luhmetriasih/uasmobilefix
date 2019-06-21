import React from 'react';
import { StyleSheet,Text ,View,TextInput,TouchableHighlight,Image,FlatList, } from 'react-native';
import Header from "./Header";
import {ImageBackground} from 'react-native'; 

const axios = require('axios');
class EditA extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
          id_c:this.props.navigation.state.params.id_c,
            daily_c:'',
            information_c:'',
            information_c:'',
           
        };
    }


    componentDidMount(){ 
      axios.get('https://mynote01.000webhostapp.com/mydaily/getidc.php?id_a='+this.state.id_c )
      .then((response)=>{ 
      console.log(response.data); 
      this.setState({ data:response.data }); 
      }) 
      .catch(function (error) { 
          console.log(error); 
      }); 
  } 
  
    render() {
      handleSubmit = () => {
        axios.post('https://mynote01.000webhostapp.com/mydaily/updatedailycampus.php', {
          id_c: this.state.id_c,
          daily_c: this.state.daily_c,
          information_c: this.state.information_c,
          deadline_c: this.state.deadline_c,
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
        return (
            <ImageBackground source={require("./d.jpg")} style={{width:'100%',height:'100%'}}>
            <View style={styles.containerMain}>
            <Header header={"Edit"} />
           <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.data}
                renderItem={({ item }) => ( 
        <View style={styles.box3}>           
        <View style={styles.box1}>
            <TextInput
                placeholder={item.id_c} 
                style={styles.textInput}
                onChangeText={id_c => this.setState({ id_c })}
            />
        </View>

        <View style={styles.box1}>
            <TextInput
                placeholder={item.daily_c} 
                style={styles.textInput}
                onChangeText={daily_c => this.setState({ daily_c })}
            />
        </View>

        <View style={styles.box1}>
            <TextInput
                placeholder={item.information_c} 
                style={styles.textInput}
                onChangeText={information_c => this.setState({ information_c })}
            />
        </View>

        
        </View>
            )} 
               /> 
                <View style={styles.box2}>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle}  onPress={()=> handleSubmit()}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableHighlight>
                </View>
               
            </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        //backgroundColor: '#469bd1',
    },
    box1: {
        width: "90%",
        paddingTop: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textInput: {
        width: 170,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
    },
    buttonStyle: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: '#03587f',
        marginBottom: 20,
        height: 40,
        width: "45%",
        borderRadius: 5,
    },
    buttonText:{
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "black",
        fontSize: 17,
      },
    box2: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        //backgroundColor: 'white'
        },
      box3: {
          width: "100%",
          paddingTop: 100,
          marginLeft: 2,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: 'center'
        },
    Text:{
        textAlign: "center",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 13,
      },
    image:{
        width: 150,
        height: 150,
        marginTop: 2,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    uploadFoto:{
        width: 150,
        height: 150,
        marginTop: 10,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
export default EditA;