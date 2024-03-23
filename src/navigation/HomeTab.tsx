import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeTabParamList} from "@/types/navigation.ts";
import {Home, Setting, Store, Numbers} from "@/screen";


const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function HomeTab() {
    return (
        <Tab.Navigator
            screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            }}>
            <Tab.Screen name="Home" component={Home} options={{tabBarLabel:"메인"}} />
            <Tab.Screen name="Numbers" component={Numbers} options={{tabBarLabel:"당첨 번호"}} />
            <Tab.Screen name="Store" component={Store} options={{tabBarLabel:"상점"}} />
            <Tab.Screen name="Setting" component={Setting} options={{tabBarLabel:"설정"}} />
        </Tab.Navigator>
    )
}
