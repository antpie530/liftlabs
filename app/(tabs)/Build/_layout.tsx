import { TopTabs } from "@/components/TopTabs/TopTabs";

export default function BuildLayout() {
    return (
        <TopTabs>
            <TopTabs.Screen name="Exercises" />
            <TopTabs.Screen name="Templates" />
            <TopTabs.Screen name="Programs" />
        </TopTabs>
    )
}