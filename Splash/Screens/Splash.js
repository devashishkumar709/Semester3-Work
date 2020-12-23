import React, { Component } from 'react';
import {SafeAreaView, TouchableOpacity, Image,ImageBackground,Text, StyleSheet, TextStyle,View,TextInput } from 'react-native';


class Splash extends Component{

    render(){
        const {navigation}=this.props;
        // setTimeout(() => {
        //     navigation.navigate("Start")
        // }, 2000);
            setTimeout(() => {
        // navigation.navigate("Start")
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Start' }],
          });
    }, 2000);
        
        return(
            <SafeAreaView style={ {flex:1, backgroundColor:'#000000'}}>
                <View style={{flex: 1,flexDirection:'column',position:'relative',alignItems:'center',justifyContent:'center'}}>
                <Image source={require('../img/icon.jpeg')} style={{height:150, width:150}}></Image>
                </View>
            </SafeAreaView>
        )
    }
}
export default Splash;