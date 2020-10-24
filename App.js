import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: "one",
    title: "TRAVEL SLIDE TEXT 1",
    text: "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./assets/images/slide1.jpg")
  },
  {
    key: "two",
    title: "TRAVEL SLIDE TEXT 2",
    text: "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./assets/images/slide2.jpg")
  },
  {
    key: "three",
    title: "TRAVEL SLIDE TEXT 3",
    text: "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./assets/images/slide3.jpg")
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHomePage: false
    };
  }
  _renderItem = ({item}) => {
    return(
      <View style={{ flex: 1 }}>
        <Image 
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "73%",
            width: "100%",
        }}/>
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: "bold",
            color: "#21465b",
            alignSelf: "center",
        }}>
          {item.title}
        </Text>
        <Text style={{
          textAlign:"center",
          color:"#b5b5b5",
          fontSize:15,
          paddingHorizontal:30
        }}>
          {item.text}
        </Text>
      </View>
    );
  }
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _renderOnDone = () => {
    this.setState({showHomePage: true})
  }
  render() {
    if(this.state.showHomePage){
      return(
        <View style={styles.container}>
          <Text>Hey, Finished!</Text>
          <StatusBar style="auto" />
        </View>
      );
    }else{
      return(
        <AppIntroSlider
          renderItem={this._renderItem} 
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          onDone={this._renderOnDone}
          data={slides} 
          activeDotStyle={{
            backgroundColor:"#21465b",
            width:30
          }}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});