
import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { firstPageStyles } from "./components/assets/styles/Styles";
class App extends Component {

  render() {
    return (
      <View style={firstPageStyles.firstView}>
        <View style={firstPageStyles.secondView}>
          <Text style={firstPageStyles.firstText}> مرحبا بك  </Text>
          <Image source={require("./components/assets/images/second.png")} />
          <Text style={firstPageStyles.secondText}> اللغة المفضلة لك فى الاستخدام  </Text>
          <View style={firstPageStyles.view}>
            <Text style={firstPageStyles.thirdText}>  عربى  </Text>
            <Text style={firstPageStyles.fourthText}> English  </Text>

          </View>
        </View>
        <TouchableOpacity style={{ flex: 1 }}>
          <View style={firstPageStyles.thirdView}>
            <Text style={firstPageStyles.fifthText}>التالى</Text>
          </View>
        </TouchableOpacity>

      </View>

    );
  }

}
export default App;
