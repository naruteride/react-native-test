import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './Navigation';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    );
}