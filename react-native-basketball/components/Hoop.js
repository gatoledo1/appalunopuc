import React, {
  Component,
} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {
  PropTypes,
} from 'prop-types';

import logoCesta from '../../src/assets/images/logo-login.png';

class Hoop extends Component {
  render() {
    return (
      <View style={[styles.hoopContainer, {
        bottom: this.props.y,
      }]}
      >
        <View style={styles.hoopContained}>
          <Image source={logoCesta} style={{height: 32, width: 50, marginTop: 5, marginLeft: 3}}></Image>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  hoopContainer: {
    position: 'absolute',
    left: (Dimensions.get('window').width / 2) - (179 / 2),
    width: 179,
    height: 112,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#b7b7b7',
    borderRadius: 4,
  },
  hoopContained: {
    width: 70,
    height: 54,
    marginTop: 38,
    borderWidth: 5,
    borderColor: '#b7b7b7',
  },
});

Hoop.defaultProps = {
  y: 0,
};

Hoop.propTypes = {
  y: PropTypes.number,
};

export default Hoop;
