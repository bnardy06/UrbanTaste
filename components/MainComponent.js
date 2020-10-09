import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { View } from 'react-native';
import { CAMPSITES } from '../shared/campsites';


class Main extends Component {
    constructor(props) {
        super();
        this.state = {
          campsites: CAMPSITES,
          selectedCampsite: null
        };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }

    render() {
        //you can't return two components at the top level. Just ONE//
        return (
            //view will wrap around both components//
            <View style={{flex: 1}}>
                <Directory 
                    campsites={this.state.campsites}
                    onPress={campsiteId => this.onCampsiteSelect(campsiteId)} 
                />
                <CampsiteInfo
                    campsite={this.state.campsites.filter(
                        campsite => campsite.id === this.state.selectedCampsite)[0]}
                />
            </View>
        );
    }
}

export default Main;