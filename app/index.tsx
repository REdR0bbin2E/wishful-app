import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
export default function Index() {

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/tabs/HomeScreen');
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <GluestackUIProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    </GluestackUIProvider>
  );
}
