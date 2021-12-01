import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import colorPalette from './contextProvider/colors'; 
import Icon from 'react-native-ionicons';

const Dark = colorPalette.Dark;
const Light = colorPalette.Light;
const Red = colorPalette.Red;

const AddMeetingBTN = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.addButton}>
            <Icon ios="ios-add" android="md-add" size={32}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        heigth: 48,
        padding: 8,
        backgroundColor: Red,
        borderRadius: 48,
        margin: 16,
    }
});

export default AddMeetingBTN