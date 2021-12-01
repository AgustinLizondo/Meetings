import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MeetingContext } from './contextProvider/provider';
import MeetingItem from '../components/MeetingItem';
import colorPalette from './contextProvider/colors'; 
import AddingForm from '../components/AddingForm';
import AddMeetingBTN from '../components/AddMeetingBtn';

const Dark = colorPalette.Dark;

const MainPage = () => {

  const { meetings, setMeetings } = useContext(MeetingContext);
  const [form, setForm] = useState(false);

    return (
        <>
            <Text style={styles.title}>Meetings Center</Text>
            {form
              ? <AddingForm />
              : null
            }
            <AddMeetingBTN onPress={() => setForm(!form)}/>
            {meetings.length != 0
            ?
                <FlatList
                data={meetings}
                renderItem={({item}) => <MeetingItem item={item}/> }
                keyExtractor={meeting => meeting.id}
                />
            :
                <Text style={styles.boldText, {textAlign: 'center'}}>Nothing to show here...</Text>
            }
        </>
    )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingVertical: 12,
    fontWeight: 'bold',
    fontSize: 16,
    color: Dark,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
})

export default MainPage
