import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  TextStyle,
  View,
  TextInput,
  Platform,
} from 'react-native';

class text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIN: '',
      Data:'',
      Out:'',
    };
  }
  Output(){
    this.setState({Out:"Corporate Social Responsibility (CSR) can generate a positive reputation for a company leading to possibly more sales and growth.Yeo Valley has been investing in making its products organic. improve brand image and productivity."})
  }

  async fetchData() {

    let url1 = ""; 

      const response1 = await fetch(url1, {
               method: 'POST',
               body: JSON.stringify({
      img:this.state.textIN }),
            });
      const data1 = await response1.json();
      this.setState({Data:data});    
  } 
  handletextIN = (text) => {
    this.setState({textIN: text});
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground source={require('../img/bg3.jpg')} style={{flex: 1}}>
          <Text style={{alignSelf: 'center', fontSize: 30, fontWeight: 'bold'}}>
            Text Summary
          </Text>

          <View style={{flex: 1, marginTop: 20}}>
            <TextInput
              onChangeText={this.handletextIN}
              placeholder={'Enter the Text'}
              placeholderTextColor={'black'}
              automaticallyAdjustContentInsets={true}
              style={{
                fontSize: 30,
                padding: 10,
                borderWidth: 0.5,
                borderRadius: 10,
                width: '90%',
                alignSelf: 'center',
                textAlign:'center'
              }}
              multiline={true}></TextInput>
          </View>
          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              height: 40,

              justifyContent: 'center',
              margin: 10,
            }}>
            <TouchableOpacity
            onPress={()=> this.Output()}
              style={{
                backgroundColor: '#800000',
                height: 50,
                justifyContent: 'center',
                width: 110,
                borderRadius: 25,
              }}>
              <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
                Summary
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={{flex: 1, padding: 10}}>
            <Text style={{fontSize: 25, borderWidth: 0.5,borderRadius:10,
            textAlign:'center'}}>
              {/* Enter Api Here */}
              {this.state.Out}
               
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
export default text;
