import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlerIOS,
  NativeModules
} from 'react-native';

const RNStreamingKitManager = NativeModules.RNStreamingKitManager;

class audioStreamingKitTest extends Component {
  getInitialState() {
    return {
      playing: false
    };
  }
  constructor(props) {
    super(props);
    this.state    = { channel: null };
    this._onPlay = this._onPlay.bind(this);
  }
  _onPlay() {
    this.setState({ playing: true });
    RNStreamingKitManager.play('http://195.154.217.103:8175/stream');
  }
  _onStop() {
    RNStreamingKitManager.stop();
    this.setState({ playing: false });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.state.playing ? this._onStop() : this._onPlay() }
          underlayColor="#E9E9EF" >
            <View style={ this.state.playing ? styles.buttonRed : styles.buttonGreen }>
              <Text style={styles.welcome}>
                { this.state.playing ? 'STOP' : 'PLAY' }
              </Text>
            </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  touchable: {
    borderRadius: 100
  },
  buttonGreen: {
    backgroundColor: 'green',
    borderRadius: 100,
    height: 150,
    width: 150,
    justifyContent: 'center'
  },
  buttonRed: {
    backgroundColor: 'red',
    borderRadius: 100,
    height: 150,
    width: 150,
    justifyContent: 'center'
  },
});

AppRegistry.registerComponent('audioStreamingKitTest', () => audioStreamingKitTest);
