// Import React and Component
import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
 
const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
       <View style={{alignItems: 'center'}}>
        <Image
            source={require('../../Image/img-avatar-example4.png')}
            style={{
              width: '100%',
              height: 150,
              resizeMode: 'contain',
              margin: 30,
            }}/>
       </View>
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
            DOCTOR - NURSE AREA {'\n'}
            In this area doctors and nurses will be able to review their schedule, review patient information and patient records.
          </Text>
        </View>
        </View>
    </SafeAreaView>
  );
};
 
export default HomeScreen;
