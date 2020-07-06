import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import MyButton from '_atoms/MyButton.js';
import { connect } from 'react-redux';
import { currentLocation } from '_redux/Action.js';

class Map extends React.Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }

  goHome = () => {
    this.setState({ region: this.props.region });
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  onRegionChange = (region) => {
    this.setState({ region });
  }


  render() {
    this.props.dispatch(currentLocation);
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{
            flex: 1,
            // position: 'fixed'
          }}
          region={this.state.region}
          // onRegionChange={this.onRegionChange}
        >
        </MapView>
        <MyButton
          buttonStyle={{
            width: 200,
          }}
          title={this.props.title}
          onPress={this.goBack} />
          <MyButton
            buttonStyle={{
              width: 200,
            }}
            title='Home'
            onPress={this.goHome} />
      </View>
    )
  }
}
const mapStateToProps = state => ({ title: state.title, region: state.region });

export default connect(mapStateToProps)(Map)
