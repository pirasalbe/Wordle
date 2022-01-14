import React, { Component } from 'react';
import { Text, View } from 'react-native';

import MatchStyle from './match.style';

class Match extends Component {
  render() {
    return (
        <View style={MatchStyle.sectionContainer}>
            <Text
                style={[
                    MatchStyle.sectionTitle
                ]}>
                Cat
            </Text>
            <Text
                style={[
                    MatchStyle.sectionDescription
                ]}>
                Hello, I am your cat!
            </Text>
        </View>
    );
  }
}

export default Match;