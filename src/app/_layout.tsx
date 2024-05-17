import { Stack } from 'expo-router';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider value={DarkTheme}>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        // Hide the header for this route
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="+not-found"
                    options={{
                        // Hide the header for this route
                        headerShown: false,
                    }}
                />
            </Stack>
        </ThemeProvider>
    );
}
