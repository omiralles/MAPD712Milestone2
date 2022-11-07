import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class ScheduleDay extends React.Component {
  render() {
    return(
      <View style = {styles.Container}>

        <Text>{this.props.dayTitle}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center', 
  },
  
});

export default ScheduleDay;