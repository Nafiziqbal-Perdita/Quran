import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListHeader from '../Components/ListHeader';
import SurahCard from '../Components/surahCard';
import useFetch from '../hook/useFetch';
import { fetchSurahs } from '../services/api';

export default function HomeScreen() {
  const router = useRouter();

  const {
    data,
    error,
    loading
  } = useFetch(() => fetchSurahs());

  return (
    <SafeAreaView className="flex-1 bg-[#16B85F]">
      {/* Header Section */}
      <View className="h-[18%] mt-2 mb-2 bg-gradient-to-b from-[#1ED975] via-[#16B85F] to-[#0E8A45] rounded-b-full items-center justify-center">
        <View className="w-20 h-20 flex items-center justify-center mb-2">
          <Image 
            source={require('../../assets/images/quran.webp')}
            style={{
              width: 80,
              height: 80,
              resizeMode: 'contain'
            }}
          />
        </View>
        <Text className="text-xl font-bold text-white">Al-Quran</Text>
        <Text className="text-white mt-2 opacity-90">Your Daily Quran Companion</Text>
      </View>

      {/* Banner Ad Section */}
      <View className="h-[50] bg-white items-center justify-center">
        <Text className="text-gray-400 text-sm">Advertisement</Text>
        {/* TODO: Add actual AdMob banner component here */}
      </View>

      {/* Content Section */}
      <View className="flex-1 bg-white">
        {loading ? (
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg text-gray-600">Loading Surahs...</Text>
          </View>
        ) : error ? (
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg text-red-500">Error loading Surahs</Text>
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <SurahCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListHeaderComponent={ListHeader}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
