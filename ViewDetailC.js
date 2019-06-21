import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, ScrollView} from 'react-native';
import {ListItem, Card, Image } from 'react-native-elements'
import axios from 'axios';
import {ImageBackground} from 'react-native';  

export default class ViewDetail extends React.Component {
  static navigationOptions = {
    header: null
}
  constructor(props) {
    super(props)
    this.state = {
        data: [],
        id_c:this.props.navigation.state.params.id_c,
         };
  }
  componentDidMount() {
    axios.get('https://mynote01.000webhostapp.com/mydaily/viewdailycampus.php?id_c='+this.state.id_c)
      .then((response)=>{
        console.log(response.data);
        this.setState({data:response.data });
      })
      .catch(function (error){
          console.log(error);
      });
  }
  hapus = () => {
    axios.post('https://mynote01.000webhostapp.com/mydaily/hapusdailycampus.php', {
        id_c: this.state.id_c,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
    }

    
    


  render() {
    return (
      <ImageBackground source={require("./d.jpg")} style={{width:'100%',height:'100%'}}>
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Detail Daily </Text>
          </View>
          <FlatList 
              keyExtractor = {(item, index) => index.toString()}
              data={this.state.data}
              renderItem = {({ item }) => (
                <View>
                <View>
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image
                    source={{uri:'https://mynote01.000webhostapp.com/mydaily/upload.php'+item.photo+''}}
                    style={{width:150, height:150}}
                    />
                    </View>
                    <Card title="Detail">
                            <Text>ID :{item.id_c}</Text>
                            <Text>DailyCampus :{item.daily_c}</Text>
                            <Text>Information :{item.information_c}</Text>
                            <Text>Deadline :{item.deadline_c}</Text>
                    </Card>
                </View>
                <View style={styles.box3}>
                <TouchableHighlight activeOpacity={0.5}
                          style={styles.BoxStyle2} onPress={()=>this.props.navigation.navigate('EditC', {id_c:item.id_c})}>
                          <Text style={styles.txtBox2}>Edit</Text>
                 
                        </TouchableHighlight>
                        <TouchableHighlight activeOpacity={0.5} 
                          style={styles.BoxStyle1} onPress={() => {this.hapus();this.props.navigation.navigate('ViewListDailyCampus')}}>
                          <Text style={styles.txtBox2}>Hapus</Text>
                        </TouchableHighlight>
                      </View> 
                      </View>
              )}
              
          />
          
       </View>
       </ScrollView>
       </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor:'#469bd1',
    marginTop: 20,
       flex: 1,
  },
  txtBox2: {
      color: 'black'
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff'
  },
  header: {
    height:70,
    //backgroundColor:'#03587f',
    justifyContent:'center',
    alignItems:'center'
  },
  box3: {
    flex: 0.8,
    margin:10,
    marginTop:10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  BoxStyle1: {
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 30, 
    padding: 20,
    width: '40%',
    height: 30,
    backgroundColor: 'white',
    marginTop:40,
    margin:10,
    marginLeft:20,
},
BoxStyle2: {
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 30, 
    padding: 20,
    width: '40%',
    height: 30,
    backgroundColor: 'white',
    marginTop:40,
    margin:10,
},
  vButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191970',
    borderRadius: 5,
    padding:20,
    margin:80,
    width: '50%',
    height: 50, 
},
txtButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
}
});