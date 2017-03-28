import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';
var supercluster = require('supercluster');

const MARKERS = [
  {id:1,name:"name1",lat: 37.7650123,long: 30.5537796},
  {id:2,name:"name2",lat: 37.7650573,long: 30.554064},
  {id:3,name:"name3",lat: 37.765050, long: 30.554185},
  {id:4,name:"name4",lat: 37.7649398,long: 30.5541165},
  {id:5,name:"name5",lat: 37.7648491,long: 30.5542225},
  {id:6,name:"name6",lat: 37.7645894,long: 30.5541534},
  {id:7,name:"name7",lat: 37.7642623,long: 30.5543861},
  {id:8,name:"name1",lat:37.7640179,long:30.5545202},
  {id:9,name:"name1",lat:37.7641197,long:30.5547897},
  {id:10,name:"name1",lat:37.7642973,long:30.5551887},
  {id:11,name:"name1",lat:37.7644833,long:30.5557332},
  {id:12,name:"name1",lat:37.7648252,long:30.5562938},
  {id:13,name:"name1",lat:37.7651516,long:30.5566243},
  {id:14,name:"name1",lat:37.765197, long:30.556627},
  {id:15,name:"name1",lat:37.765395, long:30.557304},
  {id:16,name:"name1",lat:37.764418, long:30.557490},
  {id:17,name:"name1",lat:37.764607, long:30.558193},
  {id:18,name:"name1",lat:37.763398, long:30.557917},
  {id:19,name:"name1",lat:37.761961, long:30.556688},
  {id:20,name:"name1",lat:37.761757, long:30.555497},
  {id:21,name:"name1",lat:37.761141, long:30.552916},
  {id:22,name:"name1",lat:37.760445, long:30.552029},
  {id:23,name:"name1",lat:37.760239, long:30.550942},
  {id:24,name:"name1",lat:37.760307, long:30.551114},
  {id:25,name:"name1",lat:37.760742, long:30.551385},
  {id:26,name:"name1",lat:37.760343, long:30.551978},
  {id:27,name:"name1",lat:37.759285, long:30.551656},
  {id:1,name:"name1",lat:37.759016, long:30.550993},
  {id:28,name:"name1",lat:37.759142, long:30.548763},
  {id:29,name:"name1",lat:37.759123, long:30.547457},
  {id:30,name:"name1",lat:37.759276, long:30.546473},
  {id:31,name:"name1",lat:37.759363, long:30.544584},
  {id:32,name:"name1",lat:37.759096, long:30.544002},
  {id:33,name:"name1",lat:37.759835, long:30.541564},
  {id:34,name:"name1",lat:37.761457, long:30.538274},
  {id:35,name:"name1",lat:37.761453, long:30.537432},
  {id:36,name:"name1",lat:37.761577, long:30.536365},
  {id:37,name:"name1",lat:37.762012, long:30.536440},
  {id:38,name:"name1",lat:37.762565, long:30.536526},

  {id:39,name:"name1",lat:37.759137, long:30.520922},

  {id:40,name:"name1",lat:37.760244, long:30.520133},
  {id:41,name:"name1",lat:37.760051, long:30.519631},
  {id:42,name:"name1",lat:37.760606, long:30.521105},
  {id:43,name:"name1",lat:37.760737, long:30.521808},
  {id:44,name:"name1",lat:37.760302, long:30.522074},
  {id:45,name:"name1",lat:37.760762, long:30.522581},
  {id:46,name:"name1",lat:37.759719, long:30.522423},
  {id:47,name:"name1",lat:37.759051, long:30.522182},
  {id:48,name:"name1",lat:37.758498, long:30.521498},
  {id:49,name:"name1",lat:37.758479, long:30.520653},
  {id:50,name:"name1",lat:37.760284, long:30.522974},
  {id:51,name:"name1",lat:37.760583, long:30.523374},
  {id:52,name:"name1",lat:37.761033, long:30.524063},
  {id:53,name:"name1",lat:37.760842, long:30.523457},
  {id:54,name:"name1",lat:37.761315, long:30.523304},
  {id:55,name:"name1",lat:37.761830, long:30.523028},
  {id:56,name:"name1",lat:37.761807, long:30.522060},
  {id:57,name:"name1",lat:37.762206, long:30.521051},
  {id:58,name:"name1",lat:37.762470, long:30.520702},
  {id:59,name:"name1",lat:37.763019, long:30.519989},
  {id:60,name:"name1",lat:37.763560, long:30.519707},
  {id:61,name:"name1",lat:37.763935, long:30.519568},
  {id:62,name:"name1",lat:37.764056, long:30.519799},
  {id:63,name:"name1",lat:37.764024, long:30.518597},
  {id:64,name:"name1",lat:37.764406, long:30.517723},
  {id:65,name:"name1",lat:37.764694, long:30.516613},
  {id:66,name:"name1",lat:37.764041, long:30.513480},
  {id:67,name:"name1",lat:37.764219, long:30.511506},
  {id:68,name:"name1",lat:37.765220, long:30.511098},
  {id:69,name:"name1",lat:37.765424, long:30.509875},
  {id:70,name:"name1",lat:37.767400, long:30.511785},
  {id:71,name:"name1",lat:37.768129, long:30.513266},
  ];

class Index extends Component {

  constructor(props) {
   super(props);
   var data = this.convertPoints(MARKERS);
   var clusters = this.createCluster(data);
   this.state = {
     region:{
       latitude: 37.7635701,
       longitude: 30.5511205,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
      },
     clusters:clusters
   };

 }

 convertPoints(data) {
   const results = {
     type: 'MapCollection',
     features: [],
   };
   data.map((value, key) => {
     array = {
       type: 'Map',
       properties: {
         id: value.id,
         name: value.name,
         lat_x: value.lat,
         long_x: value.long,
       },
       geometry: {
         type: 'Point',
         coordinates: [
           value.long,
           value.lat,
         ],
       },
     };
     results.features.push(array);
   });
   return results;
 }

 createCluster(data) {
      const index = supercluster({
      radius: 60,
      maxZoom: 16,
      nodeSize: 128,
    });
    index.load(data.features);
    return index;
  }



  getZoomLevel(region = this.state.region) {
      const angle = region.longitudeDelta;
      const level = Math.round(Math.log(360 / angle) / Math.LN2);
      return level;
    }

    createRegions() {
      const padding = 0;
      const markers = this.state.clusters.getClusters([
        this.state.region.longitude - (this.state.region.longitudeDelta * (0.5 + padding)),
        this.state.region.latitude - (this.state.region.latitudeDelta * (0.5 + padding)),
        this.state.region.longitude + (this.state.region.longitudeDelta * (0.5 + padding)),
        this.state.region.latitude + (this.state.region.latitudeDelta * (0.5 + padding)),
      ], this.getZoomLevel());
      return markers.map(marker => this.renderMarkers(marker));
    }


    renderMarkers(marker) {
      if(marker.properties.point_count) {
          return(
            <MapView.Marker
              coordinate={{
                longitude: marker.geometry.coordinates[0],
                latitude: marker.geometry.coordinates[1],
              }}>
              <View style={styles.circle}>
              <Text style={{color:"#fff",fontWeight:'bold'}}>{marker.properties.point_count}</Text>
              </View>
            </MapView.Marker>
          );
      } else {
        return (
          <MapView.Marker
            coordinate={{
              longitude: marker.geometry.coordinates[0],
              latitude: marker.geometry.coordinates[1],
            }}
            title={marker.properties.name}
          />
        );
      }
    }

    render(){
      return(
        <MapView
           ref={ref => { this.map = ref; }}
           style={{flex:1,}}
           onRegionChange={(region)=>{
             this.setState({region})
           }}
           initialRegion={this.state.region}
       >
       {this.createRegions()}
       </MapView>
      )
    }

}

const styles = StyleSheet.create({
  circle: {
    backgroundColor:"red",
    width:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    height:30,
    borderWidth:1,
    borderColor:"#000",
  },
});

export default Index;
