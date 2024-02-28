import { Text, Button } from "react-native"

export default HomeScreen = ({ navigation }) => {
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Guns')
            }
        />
    );
};

export const ProfileScreen = ({ navigation }) => {
    return <Text>This is asdf's profile</Text>;
};