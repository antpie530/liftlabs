import { Text, TouchableOpacity, useColorScheme } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { COLORS } from "@/constants/Colors";

interface TabBarProps extends BottomTabBarProps {

}

export default function TabBar({ state, descriptors, navigation }: TabBarProps) {
    const insets = useSafeAreaInsets();
    const colorScheme = useColorScheme();

    return (
        <Animated.View
            style={{
                backgroundColor: colorScheme === "dark" ? COLORS.dark.background : COLORS.light.background,
                borderTopColor: colorScheme === "dark" ? COLORS.dark.border : COLORS.light.border,
                borderTopWidth: 1,
                flexDirection: "row",
                paddingBottom: insets.bottom,
                paddingTop: 10
            }}
        >
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label = 
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key
                    });
                };

                return (
                    <TouchableOpacity 
                        key={route.key}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            alignItems: "center",
                            flex: 1,
                            paddingVertical: 10
                        }}
                    >
                        {options.tabBarIcon &&
                            options.tabBarIcon({ focused: isFocused, color: isFocused ? (colorScheme === "dark" ? COLORS.dark.tint : COLORS.light.tint) : (colorScheme === "dark" ? COLORS.dark.textSecondary : COLORS.light.textSecondary), size: 24 })}
                        <Text style={{ color: isFocused ? (colorScheme === "dark" ? COLORS.dark.tint : COLORS.light.tint) : (colorScheme === "dark" ? COLORS.dark.textSecondary : COLORS.light.textSecondary), fontSize: 12 }}>{label as string}</Text>
                    </TouchableOpacity>
                )
            })}
        </Animated.View>
    )
}
