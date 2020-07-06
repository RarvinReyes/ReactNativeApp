import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '_styles/StyleSheet.js';
import MyButton from '_atoms/MyButton.js';
import MyTextInput from '_atoms/MyTextInput.js';
import { connect } from 'react-redux';
import { updateTitle } from '_redux/Action.js';
import NavNames from '_navigations/NavNames.js';

class SettingsPage extends React.Component {
    state = {
        title: this.props.title,
        saveDisabled: true,
    }

    componentDidMount() {
        this.validateForm();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.title !== prevState.title) {
            this.validateForm();
        }
    }

    handleTitleChange = (value) => {
        this.setState({
            title: value
        });
    }

    validateForm() {
        this.setState({
            saveDisabled: !(this.state.title),
        });
    }

    handleSumit = () => {
        this.props.dispatch(updateTitle(this.state.title));
        this.props.navigation.navigate(NavNames.TIMER);
    }

    render() {
        return (
            <View style={[Styles.column, Styles.height_100, Styles.center]}>
                <View style={[Styles.row, Styles.center]}>
                    <Text style={[Styles.label]}>Title:</Text>
                    <MyTextInput
                        style={[Styles.textInput]}
                        onChangeText={this.handleTitleChange}
                        value={this.state.title} />
                </View>
                <View style={[Styles.row, Styles.center]}>
                    <MyButton
                        title="SAVE"
                        onPress={this.handleSumit}
                        disabled={this.state.saveDisabled} />
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => ({ title: state.title });

export default connect(mapStateToProps)(SettingsPage)