import TabBar from "@/components/TabBar/TabBar";
import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import { COLORS } from "@/constants/Colors";

export default function TabsLayout() {
    return (
        <Tabs 
            screenOptions={{ 
                headerShown: false,
            }}
            tabBar={(props) => <TabBar {...props} />}
        >
            <Tabs.Screen 
                name="Analyze"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Entypo name="line-graph" size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: "Track",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Entypo name="pencil" size={24} color={color} />
                    )
                }} 
            />
            <Tabs.Screen
                name="Build"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Entypo name="tools" size={24} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}