import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const home = () => {

    const router = useRoute();
    const [notification, setNotification] = useState(false);

    console.log(router.name);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    gap: 12,
                    paddingHorizontal: 12,
                    backgroundColor: 'white'
                }}
            >

                {/* Punchiling and Avatar  */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: 12,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 48,
                                fontWeight: 700
                            }}
                        >Ready To</Text>
                        <Text
                            style={{
                                fontSize: 48,
                                fontWeight: 700,
                                color: Colors.rose
                            }}
                        >WorkOut</Text>
                    </View>

                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 12
                        }}
                    >
                        <Image
                            source={require("@/assets/images/avatar.png")}
                            style={{
                                width: 64,
                                height: 64,
                                borderRadius: 32
                            }}
                        />

                        <View
                            style={{
                                width: 48,
                                height: 48,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 24,
                                backgroundColor: 'rgb(226 232 240)',
                                borderColor: 'gray'
                            }}
                        >
                            <FontAwesome
                                name="bell"
                                size={32}
                                color={notification ? 'rgb(190 18 60)' : 'gray'}
                                onPress={() => setNotification(!notification)}
                            />
                        </View>

                    </View>

                </View>

                {/* Image Slider  */}
                <View>

                </View>

            </View>
        </SafeAreaView >
    );
};

export default home;