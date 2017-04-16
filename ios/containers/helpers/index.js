import {Alert} from 'react-native';

const Helpers = {
	handleAlertButtonClick: (text, event) => {
		Alert.alert(`${text}, button has been pressed!`);
	}
};

export default Helpers;