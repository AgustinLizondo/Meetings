import React, { useState, useContext } from 'react'
import { Button, View, TextInput, StyleSheet, Text, TouchableHighlight } from 'react-native'
import colorPalette from './contextProvider/colors'; 
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MeetingContext } from './contextProvider/provider';

const Dark = colorPalette.Dark;
const Red = colorPalette.Red;
const Light = colorPalette.Light;
const Blue = colorPalette.Blue;

const AddingForm = () => {

    const { meetings, setMeetings } = useContext(MeetingContext);

    const [name, setName] = useState('');
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirmDate = (date) => {
        const options = {weekday: 'long'};
        setDay(date.toLocaleDateString('en-EN', options));
        console.log(day);
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
    const handleConfirmTime = (hour) => {
        const options = {hour: '2-digit', minute: '2-digit'};
        setHour(hour.toLocaleString('en-EN', options));
        console.log(hour);
        hideTimePicker();
    };

    const addMeeting = () => {
        if (name !== null && day !== null && hour !== null){
            let meeting = {
                id: meetings.length + 1,
                name,
                day,
                hour,
            }
            console.log(meeting);
            setMeetings((previous) => [...previous, meeting])
        } else {
            alert('All fields are required.')
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} placeholder='Name'
                    onChangeText={(text) => setName(text)}
                />
            </View>
            <View style={{marginTop: 8}}>
                <Button title="Select Date" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirmDate}
                    onCancel={hideDatePicker}
                />
                {day
                    ? <Text>{day}</Text>
                    : null
                }
            </View>
            <View style={{marginTop: 8}}>
                <Button title="Select Time" onPress={showTimePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleConfirmTime}
                    onCancel={hideTimePicker}
                />
                {hour
                    ? <Text>{hour}</Text>
                    : null
                }
            </View>
                <TouchableHighlight
                    style={styles.addBtn}
                    onPress={addMeeting}
                >
                    <Text style={styles.boldText, {color: '#efefef', textAlign: 'center'}}>Add Meeting</Text>
                </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: Dark,
        borderRightWidth: 1,
        borderRightColor: Dark,
        marginVertical: 2,
    },
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: Light,
    },
    addBtn: {
        padding: 10,
        backgroundColor: Blue,
        marginVertical: 10,
    }
});

export default AddingForm
