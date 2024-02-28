import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HouseImg from './assets/images/house-solid.svg';
import { Image } from 'react-native'

import News, { Guns, Manual } from './News';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            initialRouteName="News"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="News"
                component={News}
                options={{
                    tabBarLabel: 'News',
                    tabBarIcon: ({ color, size }) => {
                        return <Image source={{
                            uri: './assets/images/house-solid.svg'
                        }} />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}