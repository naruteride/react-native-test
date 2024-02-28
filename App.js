import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen, { ProfileScreen } from './HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen
                    name="News"
                    component={HomeScreen}
                />
                <Stack.Screen name="Guns" component={ProfileScreen} />
                {/* <Stack.Screen name="Manual" component={ProfileScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
