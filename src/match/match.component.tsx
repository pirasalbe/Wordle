import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Keyboard from './keyboard/keyboard.component';
import MatchStyle from './match.style';

export default class Match extends Component {
  render(): JSX.Element {
    return (
      <View style={MatchStyle.sectionContainer}>
        <Text style={[MatchStyle.sectionTitle]}>Cat</Text>
        <Text style={[MatchStyle.sectionDescription]}>
          Hello, I am your cat!
        </Text>
        <Keyboard />
      </View>
    );
  }
}
