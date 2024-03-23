import {HomeTabScreenProps} from "@/types/navigation.ts";
import {Text, View} from "react-native";

export default function Setting({navigation}: HomeTabScreenProps<'Setting'>) {
    return (
        <View>
            <Text>Setting Screen</Text>
        </View>
    )
}
