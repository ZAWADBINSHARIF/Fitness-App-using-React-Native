import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from 'expo-router';

const home = () => {

    const router = useRoute();

    console.log(router.name);

    return (
        <View>
            <Text>home</Text>
        </View>
    );
};

export default home;