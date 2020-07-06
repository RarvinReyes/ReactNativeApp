import { StyleSheet } from 'react-native';
// import Constants from 'expo-constants';

const fontSize = 20
const fontStyle = '';
const fontFamily = '';
const myBlue = '#3498DB';
const myGray = '#273746';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 5,
    },
    row: {
        flexDirection: 'row',
        padding: 5,
    },
    column: {
        flexDirection: 'column',
    },
    flexEnd: {
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    },
    center: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    title: {
        fontSize: 24,
    },
    textInput: {
        borderColor: myBlue,
        borderWidth: 0,
        borderBottomWidth: 3,
        borderRadius: 10,
        padding: 5,
    },
    label: {
        fontSize: 20,
        padding: 5,
    },
    timerBox: {
        width: '50%',
        alignItems: 'center',
    },
    timerLabel: {
        fontSize: 40,
        paddingVertical: 10,
    },
    timer: {
        fontSize: 40,
        minWidth: 30,
        maxWidth: 50,
    },
    timerActive: {
        color: myBlue,
        fontWeight: 'bold',
    },
    width_100: {
        width: '100%',
    },
    width_50: {
        width: '50%',
    },
    height_100: {
        height: '100%',
    },
    height_80: {
        height: '100%',
    },
    height_60: {
        height: '60%',
    },
    height_50: {
        height: '50%',
    },
});


export const testing = StyleSheet.create({
    HeaderStyle: {
        backgroundColor: '#333333',
        minHeight: 50,
        justifyContent: 'center',
    }
});

export const HeaderStyle = {
    backgroundColor: '#333333',
    minHeight: 50,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 100,
}

export const HeaderTintColor = 'white';

export const HeaderStatusBarHeight = 0; //Constants.statusBarHeight;

export const Specs = StyleSheet.create({
    width_100: {
        width: '100%',
    },
    height_100: {
        height: '100%',
    },
    height_50: {
        height: '50%',
    },
});