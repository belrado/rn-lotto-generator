import {HomeTabScreenProps} from "@/types/navigation.ts";
import {Text, View} from "react-native";

export default function Store({navigation}: HomeTabScreenProps<'Store'>) {
    return (
        <View>
            <Text>Store Screen</Text>
        </View>
    )
}
