// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
 
const PatientsMngtScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            PATIENTS MANAGEMENT
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
 
export default PatientsMngtScreen;