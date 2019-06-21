import React from 'react';
import { Text ,View,FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";
import {ImageBackground} from 'react-native';


const axios = require('axios');
export default class ViewListDailyActivity extends React.Component{
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
    axios.get('http://mynote01.000webhostapp.com/mydaily/getdailyactivity.php')
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
                <Header header={"Daily Activity"} />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                            <ListItem style={styles.list} onPress={()=>this.props.navigation.navigate("ViewDetailA",{id_a:item.id_a})}
                            title={item.daily_a}
                            titleStyle={{color:'#191970', fontWeight:'bold'}}
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
            marginTop:10
        },
    });
    
