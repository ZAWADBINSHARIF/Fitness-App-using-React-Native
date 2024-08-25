import { router, Stack } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {


  useEffect(() => {
    router.push("/home");
  });

  return (
    <Stack
      screenOptions={{
        'headerShown': false
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name='home' />
    </Stack>
  );
}
