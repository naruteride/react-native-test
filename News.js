import { StyleSheet, Text, Button, View } from "react-native";

export default News = ({ navigation }) => {
    return <>
        <View style={styles.container}>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Guns')
                }
            />
        </View>
    </>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        position: "relative",
    },
});

export const Guns = ({ navigation }) => {
    return <Text>This is asdf's profile</Text>;
};
export const Manual = ({ navigation }) => {
    return <Text>This is asdf's profile</Text>;
};