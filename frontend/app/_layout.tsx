import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Word of the Day",
            title: "Word of the Day",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
