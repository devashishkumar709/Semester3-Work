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
import ImagePicker from 'react-native-image-picker';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCamera: true,
      uri: '',
      Data:'',
      avatarSource: require('../img/grid.png'),
    };
  }

  fetchData() {

    let url1 = "https://ai-sum.herokuapp.com/url"; 

      const response1 =fetch(url1, {
               method: 'POST',
               body: JSON.stringify({
      image: 'https://miro.medium.com/max/3348/1*okJsgoJDXQD5Nvyu-waDIw.png'
      // this.state.uri
     }),
            });
      const data1 = response1.json;
      this.setState({Data:data1});   
      console.log(this.state.Data) ;
  } 





  handleLibrary() {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.launchImageLibrary(options, (response) => {
      // console.log('Response = ', response);
      this.setState({uri: response.uri});
      console.log(this.state.uri);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  handlePhoto() {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };


    
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  render() {
    const {navigation} = this.props;

    return (
      <SafeAreaView>
       
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 26, fontWeight: 'bold'}}>
                Select Image
              </Text>
            </View>
            <View
              style={{
                borderRadius: 1,
                height: 200,
                marginHorizontal: 30,
                alignItems: 'center',
                marginTop: 50,
              }}>
              <Image
                source={this.state.avatarSource}
                style={{height: 200, width: 200}}></Image>
            </View>

            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                flex: 0.2,
                marginTop: 90,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{marginLeft: 10, marginRight: 10}}
                onPress={() => this.handlePhoto()}>
                <Image
                  source={require('../img/camera.png')}
                  style={{height: 50, width: 50}}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginLeft: 10, marginRight: 10}}
                onPress={() => this.handleLibrary()}>
                <Image
                  source={require('../img/gallery.png')}
                  style={{height: 50, width: 50}}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 10, marginRight: 10}}>
                <Image
                  source={require('../img/attach.png')}
                  style={{height: 50, width: 50}}></Image>
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: '#00203fff',
                padding: 10,
                borderRadius: 30,
                marginLeft: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 90,
                marginRight:10
              }}>
              <TouchableOpacity onPress={()=> 
                navigation.navigate("Detected Text",this.fetchData(),)
              }
                >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    color: 'white',
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
      </SafeAreaView>
    );
  }
}
export default Demo;
