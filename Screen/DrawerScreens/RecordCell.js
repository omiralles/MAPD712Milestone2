import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

class ResidentCell extends React.Component {
  
  render() {
    
    return (
      <TouchableOpacity style={styles.ResidentCell}>
        <View style={styles.CellContainer}>
          <Image source = {require("../../Image/heartrate.png")} style = {styles.CellIcon}/>
          <View style={styles.CellDataContainer}>
            <Text style={{fontWeight: "bold"}}>Day: {this.props.recordDate}</Text>
            <Text>Blood presure: {this.props.bloodPreaseure}</Text>
            <Text>Respiration rate: {this.props.respiratoryRate}</Text>
            <Text>Blood oxygen: {this.props.bloodOxygen}</Text>
            <Text>Heart beat; {this.props.heartBeat}</Text>
          </View>
          <Image source = {require("../../Image/icon-details-example1.png")} style = {styles.CellAccessory}/>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  CellAccessory: {
    width: 30,
    height: 30,
  },
  CellContainer: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  CellDataContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  CellIcon: {
    width: 50,
    height: 50,
  }, 
  ResidentCell: {
    margin: 5,
    backgroundColor: '#bbb',
    borderWidth:2,
    borderRadius: 10,
    minHeight: 100,
  }
});

export default ResidentCell;