import { Text, Button } from "react-native"

export default HomeScreen = ({ navigation }) => {
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Guns', { name: 'Jane' })
            }
        />
    );
};

export const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};