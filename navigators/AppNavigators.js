import  { createStackNavigator }from 'react-navigation'
import HomePage from '../pages/HomePage';
import List from '../pages/List'
import About from '../pages/About'


export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            title: "I-Messenger"
        }
    },
    List: {
        screen : List,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name} !`
        }) 
    },
    About: {
        screen : About,
        navigationOptions: {
            title: "About"
        }
    }
})