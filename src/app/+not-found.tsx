import { Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops!' }} />
            {/* <ThemedView style={styles.container}>
                <ThemedText type="title">This screen doesn't exist.</ThemedText>
                <Link href="/" style={styles.link}>
                    <ThemedText type="link">Go to home screen!</ThemedText>
                </Link>
            </ThemedView> */}
        </>
    );
}
