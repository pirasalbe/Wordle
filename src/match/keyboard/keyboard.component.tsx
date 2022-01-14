import React, { Component } from 'react';
import { Button, View } from 'react-native';

import { MatchService, matchService } from '../../match.service';

export default class Keyboard extends Component {
  private matchService: MatchService = matchService;

  render(): JSX.Element {
    return (
      <View>
        <Button
          onPress={() => matchService.typeLetter("A")}
          title="A"
          color="#841584"
        />
      </View>
    );
  }
}
