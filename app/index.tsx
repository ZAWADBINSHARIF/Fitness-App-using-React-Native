import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

const index = () => {
    return (
        <View className="flex-1 flex justify-end">
            <StatusBar style='light' />
            <Image
                className='h-full w-full absolute'
                source={require("@/assets/images/welcome4.jpg")}
            />

            <LinearGradient
                colors={['transparent', '#18181b']}
                style={{ width: "100%", height: "100%" }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.9 }}
                className='flex justify-end pb-12 space-y-8'
            >
                <Animated.View entering={FadeInDown.delay(100).springify()} className='flex items-center'>
                    <Text className='text-4xl text-white font-bold tracking-wide'>
                        Best <Text className='text-rose-500'>Workouts</Text>
                    </Text>
                    <Text className='text-4xl text-white font-bold tracking-wide'>
                        For you
                    </Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).springify()}>
                    <TouchableOpacity
                        className='p-3 w-[80%] flex items-center justify-center mx-auto border-2 border-neutral-200 bg-rose-500 rounded-full'
                        onPress={() => router.push("/home")}
                    >
                        <Text className='text-center text-white text-3xl font-bold tracking-widest'>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </Animated.View>


            </LinearGradient>

        </View>
    );
};

export default index;