import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import DataProvider, { MeetingContext } from './contextProvider/provider';
import colorPalette from './contextProvider/colors'; 

const Dark = colorPalette.Dark;
const Red = colorPalette.Red;

const MeetingItem = ({item})=>{

  const { meetings, setMeetings } = useContext(MeetingContext);

  const deleteMeeting = (meetingToRemove) => {
    setMeetings(meetings.filter(meeting => meeting != meetingToRemove))
  }
   return(
    <View style={styles.meeting}>
      <Text>Meeting with <Text style={styles.boldText}>{item.name}</Text> on <Text style={styles.boldText}>{item.day}</Text></Text>
      <Text style={styles.boldText}>{item.hour}</Text>
      <TouchableHighlight
        style={styles.deleteBtn}
        onPress={() => deleteMeeting(item)}
      >
        <Text style={styles.boldText, {color: '#efefef', textAlign: 'center'}}>Delete</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  meeting: {
    backgroundColor: '#fefefe',
    borderTopWidth: 1,
    borderTopColor: Dark,
    borderStyle: 'solid',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  deleteBtn: {
    padding: 10,
    backgroundColor: Red,
    marginVertical: 10,
  }
})

export default MeetingItem;