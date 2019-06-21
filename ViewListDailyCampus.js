import React from 'react';
import { Text ,View,FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";
import {ImageBackground} from 'react-native';


const axios = require('axios');
export default class ViewListDailyCampus extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props); 
        this.state = {
          data: [],
        };
    }
    componentDidMount(){
    axios.get('http://mynote01.000webhostapp.com/mydaily/getdailycampus.php')
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  });

}
    render() {
        return (
            <ImageBackground source={require("./d.jpg")} style={{width:'100%',height:'100%'}}>
            <View style={styles.vHeader}>
                <Header header={"Daily Campus"} />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                            <ListItem style={styles.list} onPress={()=>this.props.navigation.navigate("ViewDetailC",{id_c:item.id_c})}
                            title={item.daily_c}
                            titleStyle={{color:'black', fontWeight:'bold'}}
                            leftAvatar={{
                                source: { uri:"https://mynote01.000webhostapp.com/mydaily/img/"+item.img},
                           }}
                        />   
                    )
                    }
                />
            </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    vHeader: {
            flex: 1,
            //backgroundColor: '#ADD8E6',
        },
        list: {
            marginTop:10,
            color:'black'
        },
    });
    
