import {View, Text} from 'react-native';
import React, {PropsWithRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EventsStackParams} from '../../routes/EventsStack/EventsStack';

type Props = NativeStackScreenProps<EventsStackParams, 'Map'>;
const MapScreen = ({route}: Props) => {
  const {location} = route.params;

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
