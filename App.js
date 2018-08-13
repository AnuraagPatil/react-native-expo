//imports
import React from 'react';
import {View,Text} from 'react-native';

//create 
class App extends React.Component {
  render() {
    return (
      <View styles.viewStyle>
        <Text>Hello World , this is react native</Text>
      </View>
    );
  }
}

const styles = {
	viewStyle: {	
		flex : 1, 
		alignItems: 'center', 
		justifyContent: 'center'
	}
}
//exports
exports default App;
