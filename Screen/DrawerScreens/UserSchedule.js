// Import React and Component
import React, {useState, createRef, useEffect} from 'react';
import {View, 
    Text, 
    SafeAreaView, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity,
    Keyboard
} from 'react-native';
import ScheduleDay from './ScheduleDay';
import SelectList from 'react-native-dropdown-select-list';

import AsyncStorage from '@react-native-community/async-storage';
 
const ScheduleScreen = () => {
  const [currentDateString, setCurrentDateString] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectItem, setSelected] = useState('');
  const [selectCenter, setSelectedCenter] = useState('');

  const data = [
    {key:1, value: "Family Medicine"},
    {key:2, value: "Urgency Medicine"},
    {key:3, value: "Dermatology"},
    {key:4, value: "Diacnostic Radiology"},
    {key:5, value: "Pediatrics"}
  ];

  const dataCenter = [
    {key:1, value: "Toronto North"},
    {key:2, value: "Toronto South"},
    {key:3, value: "Toronto East"},
    {key:4, value: "Toronto West"}
  ];

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDateString(
      month + '/' + date + '/' + year
    );
  }, []);

  const previousDay = () => {
    const currentDayInMilli = currentDate.getTime();
    const oneDay = 1000 * 60 *60 *24;
    const previousDayInMilli = currentDayInMilli - oneDay;
    const previousDate = new Date(previousDayInMilli);
    var date = previousDate.getDate(); //Current Date
    var month = previousDate.getMonth() + 1; //Current Month
    var year = previousDate.getFullYear(); //Current Year
    setCurrentDate(
      previousDate
    );
    setCurrentDateString(
      month + '/' + date + '/' + year
    )
  };

  const nextDay = () => {
    const currentDayInMilli = currentDate.getTime();
    const oneDay = 1000 * 60 *60 *24;
    const previousDayInMilli = currentDayInMilli + oneDay;
    const previousDate = new Date(previousDayInMilli);
    var date = previousDate.getDate(); //Current Date
    var month = previousDate.getMonth() + 1; //Current Month
    var year = previousDate.getFullYear(); //Current Year
    setCurrentDate(
      previousDate
    );
    setCurrentDateString(
      month + '/' + date + '/' + year
    )
  };

  const handleSubmitButton = () => { 

  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 5}}>
        <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 5,
              marginTop: 15,
              marginRight: 30,
              marginLeft: 30
            }}>
            Day
          </Text>
        <View style = {styles.ScheduleContainer}>
          <TouchableOpacity onPress={previousDay}>
            <Text>Prev</Text>
          </TouchableOpacity>
          <ScheduleDay dayTitle={currentDateString}/>
          <TouchableOpacity onPress={nextDay}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.SectionStyle}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 15,
              marginTop: 15,
              marginRight: 30,
              marginLeft: 30
            }}>
            Speciality
          </Text>
          <SelectList
            data={data}
            setSelected = {setSelected} 
          />          
        </View>
        <View style = {styles.SectionStyle}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              marginBottom: 15,
              marginTop: 15,
              marginRight: 30,
              marginLeft: 50
            }}>
            Center
          </Text>
          <SelectList
            data={dataCenter}
            setSelected = {setSelectedCenter} 
          />          
        </View>
        <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>INTRODUCE APPOINTMENT</Text>
          </TouchableOpacity>
      </View> 
    </SafeAreaView>
  );
};
 
export default ScheduleScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 200,
    marginTop: 5,
    marginLeft: 35,
    marginRight: 35,
    margin: 20,
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
  ScheduleContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    padding: 5,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: 'white',
    alignItems: 'center', 
  },
});