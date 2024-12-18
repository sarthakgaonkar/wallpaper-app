import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import accountInfo from "../(othertabs)/accountInfo";


export default function account() {
    return <SafeAreaView>
        <Text>Account page</Text>
        <Link href={"/accountInfo"}>
        <Text>Account info</Text>
        </Link>
    </SafeAreaView>
}
