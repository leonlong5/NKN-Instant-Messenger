import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,ScrollView} from 'react-native';

const nkn = require('nkn-client');
const client = nkn({
  identifier: 'Leon',
	privateKey: 'cd5fa29ed5b0e951f3d1bce5997458706186320f1dd89156a73d54ed752a7f38'
});



type Props = {};
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', te: []};

    const { navigation } = this.props;
    var address = client.addr;
    console.log(address);

    if (window["WebSocket"]) {

      client.on('connect', () => {
        console.log('Connection opened.');
      });

      client.on('message', (src, payload) => {
        // console.log(src);
        console.log(payload);
        var data = JSON.parse(payload);
        this.setState({ te: this.state.te.concat(data.data) }) 
        
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={{height: 450, padding:'10%'}}>
            {
                this.state.te.map((item, i) => {
                    return (<Text key={i}>{item}</Text>);
                })
            }
        </View>

        <TextInput
          style={{ height: 40}}
          placeholder="Say something..."
          onChangeText={(txt) => {
            this.setState(previousState => {
              return { text: txt };
            });
          }}
          value={this.state.text}
        />
         <Button style={{ height: 40}}
          onPress={() => {
            client.send(
              'Jack.02cc590138d3558049a03fd64e57a98d328d708be0242e7a1bc11b468cae4101b6',
              JSON.stringify({type: "txt", data:  this.state.text}),
            );

            this.setState({ te: this.state.te.concat(this.state.text) });
            this.setState({ text : '' });
          }}
          title="Send"
        />
         {/* <Button
            title="About"
            onPress = {()=> {
                navigation.navigate('About')
            }}
        /> */}
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  log: {
    padding:'10%'
  }
});
