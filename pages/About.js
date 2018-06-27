import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

type Props = {};
export default class About extends React.Component {
  render() {
      //get navigation from props
      const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>This is about page!</Text>
        <Button 
            title = "Go Back"
            onPress = { () => {
                //button go back to homepage
                navigation.goBack();
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
