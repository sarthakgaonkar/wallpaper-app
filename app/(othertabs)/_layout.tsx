import { Slot } from "expo-router";
import { Text, View } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";


export default function RootLayout() {
    return <View>
    <View style={{backgroundColor: "red"}}>
        <Text>Go Back</Text>
    </View>
    <Slot />
    </View>
}