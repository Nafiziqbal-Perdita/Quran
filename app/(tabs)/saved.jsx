import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SavedScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#16B85F]">
      {/* Header Section */}
      <View className="h-[18%] bg-[#16B85F] rounded-b-full items-center justify-center">
        <Image 
          source={require('../../assets/images/quran.webp')}
          className="w-20 h-20 mb-2 rounded-md"
          resizeMode="contain"
        />
        <Text className="text-xl font-bold text-white">Al-Quran</Text>
        <Text className="text-white mt-2 opacity-90">Your Daily Quran Companion...</Text>
      </View>
      
  
 
    </SafeAreaView>
  );
}
