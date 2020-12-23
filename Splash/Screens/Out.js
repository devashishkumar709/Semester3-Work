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

class out extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1,justifyContent:'center'}}>
                    <ImageBackground source={require('../img/bg4.jpg')}
                    style={{flex:1,justifyContent:'center'}}>
                    <Text
                     style={{
                        fontSize:20,
                        borderWidth:1,
                        alignSelf:'center',
                        padding:20,
                        color:'black',
                        margin:10
                    }}>
                    Corporate Social Responsibility (CSR) can generate a positive reputation for a company leading to

possibly more sales and growth. According to Jones et al (2019), a corporation that invests in the

environmental and ethical approaches of CSR will demonstrate to the public and the media that

they are a responsible company. Watson (2018) provides evidence that this improves consumer

sales as customers tend to support ethical green business practice thus improving profitability and

encouraging growth. For example, a yoghurt company called Yeo Valley has been investing in

making its products organic, creating fully recyclable packaging and reducing its CO2 output. As a

result, profits have doubled within the last two years providing the company with a range of

opportunities to expand (Peterson, 2019). Overall, the evidence seems to suggest that investing in

CSR can improve brand image and productivity.
                    </Text>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        )
    }
}
export default out;