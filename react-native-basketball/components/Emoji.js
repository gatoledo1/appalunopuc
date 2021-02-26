import React, {
  Component,
} from  'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import {
  PropTypes,
} from 'prop-types';

const happy = ['👋', '👌', '👍', '👏'];
const sad = ['😢', '😓', '😒', '😭'];
const INITIAL_Y = 4;


class Emoji extends Component {

  constructor(props) {
    super(props);

    this.state = {
      relativeY: new Animated.Value(INITIAL_Y),
      fadeAnim: new Animated.Value(0),
      emoji: '',
    };
  }

  componentDidUpdate(nextProps) {
    if (nextProps.scored !== null && this.props.scored === null) {
      if (nextProps.scored === true) {
        this.setState({
          emoji: this.getEmoji(true),
        });
      } else {
        this.setState({
          emoji: this.getEmoji(false),
        });
      }

      this.state.relativeY.setValue(INITIAL_Y);

      Animated.timing(
        this.state.fadeAnim,
        {toValue: 1, useNativeDriver: true}
      ).start();

      Animated.timing(
        this.state.relativeY,
        {toValue: 15, useNativeDriver: true}
      ).start();
    } else if (nextProps.scored === null && this.props.scored !== null) {
      Animated.timing(
        this.state.fadeAnim,
        {toValue: 0, useNativeDriver: true}
      ).start();

      Animated.timing(
        this.state.relativeY,
        {toValue: 40, useNativeDriver: true}
      ).start();
    }
  }

  getEmoji(isHappy = true) {
    const min = 0;
    const max = 3;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isHappy === true) {
      return happy[random];
    }
    return sad[random];
  }

  render() {
    return (
      <View style={[styles.emojiContainer, {
        bottom: this.props.y,
        width: 100,
        height: 100,
        left: Dimensions.get('window').width / 2 - 50,
      }]}
      >
        <Animated.Text style={[{
          fontSize: 35,
          backgroundColor: 'transparent',

          opacity: this.state.fadeAnim,
          marginBottom: -70,
        }]}
        >
          {this.state.emoji}
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emojiContainer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

Emoji.defaultProps = {
  y: 0,
  scored: null,
};

Emoji.propTypes = {
  y: PropTypes.number,
  scored: PropTypes.bool,
};

export default Emoji;
