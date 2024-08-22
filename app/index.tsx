import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

const index = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'flex-end'
            }}>
            <StatusBar style='light' />
            <Image
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                }}
                source={require("@/assets/images/welcome4.jpg")}
            />

            <LinearGradient
                colors={['transparent', '#18181b']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.9 }}
                style={{
                    width: "100%",
                    height: "100%",
                    flex: 1,
                    justifyContent: 'flex-end',
                    paddingBottom: 48,
                    gap: 28,
                }}
            >
                <Animated.View entering={FadeInDown.delay(100).springify()}
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 40,
                            fontWeight: 'bold'
                        }}
                    >
                        Best <Text
                            style={{
                                color: "rgb(244 63 94)",
                                fontSize: 40,
                                fontWeight: 'bold'
                            }}
                        >Workouts</Text>
                    </Text>
                    <Text
                        style={{
                            fontSize: 40,
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        For you
                    </Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).springify()}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            padding: 12,
                            width: '80%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 2,
                            borderRadius: 20,
                            borderColor: "rgb(229 229 229)",
                            backgroundColor: "rgb(244 63 94)"
                        }}
                        onPress={() => router.push("/home")}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 32,
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </Animated.View>


            </LinearGradient>

        </View>
    );
};

export default index;