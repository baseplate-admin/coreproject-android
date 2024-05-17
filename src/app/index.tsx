import { Text, View } from 'react-native';
import CoreProjectLogo from '@/icons/coreproject-logo';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    return (
        <SafeAreaView>
            <View>
                <CoreProjectLogo />
                
            </View>
        </SafeAreaView>
    );
}
