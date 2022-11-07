// Import React and Component
import React, {useState, createRef, useEffect} from 'react';
import {View, 
    Text, 
    SafeAreaView, 
    StyleSheet,
    ScrollView,
    FlatList, 
    TextInput, 
    TouchableOpacity,
    Keyboard
} from 'react-native';

import ResidentCell from './RecordCell'

import AsyncStorage from '@react-native-community/async-storage';
 
const ProfileScreen = () => {
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const EXAMPLE_DATA = [
    {
      day: '11-01-2022 12:00',
      bloodpresure: '70/120',
      respiratoryrate: '30',
      bloodoxygen: '93%',
      heartbeat: '66',
    },
    {
      day: '11-02-2022 12:00',
      bloodpresure: '65/117',
      respiratoryrate: '32',
      bloodoxygen: '94%',
      heartbeat: '68',
    },
    {
      day: '11-03-2022 12:00',
      bloodpresure: '71/122',
      respiratoryrate: '29',
      bloodoxygen: '94%',
      heartbeat: '67',
    },
    {
      day: '11-04-2022 12:00',
      bloodpresure: '71/120',
      respiratoryrate: '30',
      bloodoxygen: '94%',
      heartbeat: '66',
    },
    {
      day: '11-05-2022 12:00',
      bloodpresure: '74/120',
      respiratoryrate: '33',
      bloodoxygen: '92%',
      heartbeat: '70',
    },
  ]

  AsyncStorage.getItem('user_id').then((value) => {
    setUserId(value);
  });

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = () => {
    fetch('http://localhost:3000/residentRecords/list_records?user_id=' + userId ,
    {
    	method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson?.length != 0) {
            setUserName(responseJson[0].completename);
            setUserSIN(responseJson[0].sin);
            setUserEmail(responseJson[0].email);
            setUserAddress(responseJson[0].address);
            setUserPhone(responseJson[0].phone);
            setUserAge(responseJson[0].age);
            console.log('Value retrieve');
        } else {
          setErrortext("No data found");
          console.log('No data found');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
    }

    const renderItem = ({ item }) => (
        <ResidentCell recordDate={item.day} bloodPreaseure={item.bloodpresure} respiratoryRate={item.respiratoryrate}
        bloodOxygen={item.bloodoxygen} heartBeat={item.heartbeat}
         />
      );

  return (
    <SafeAreaView style={{flex: 1}}>
        <View>
            <Text
            style={{
                fontSize: 20,
                textAlign: 'center',
                marginBottom: 20,
                marginTop:30,
            }}>
            YOUR RECORDS
            </Text>
            <ScrollView>
                <FlatList
                    data={EXAMPLE_DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.day}
                />
            </ScrollView>
        </View>
    </SafeAreaView>
 );
};
 
export default ProfileScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 30,
    marginTop: 5,
    marginLeft: 35,
    marginRight: 35,
    margin: 5,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: 'white',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 50,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});