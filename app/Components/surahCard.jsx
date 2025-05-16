import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const SurahCard = ({ item }) => {
  const router = useRouter();
  
  const handlePress = () => {
    router.push({
      pathname: "/surah/[id]",
      params: { id: item.id }
    });
  };

  return (
    <TouchableOpacity 
      className="flex-row items-center justify-between p-4 border-b border-gray-200"
      onPress={handlePress}
    >
      <View className="flex-row items-center">
        <View className="w-12 h-12 bg-[#16B85F] rounded-full items-center justify-center mr-3 shadow-md">
          <Text className="text-white font-bold text-lg" style={{position: 'absolute'}}>{item.id}</Text>
          <Text className="text-white text-4xl">۝</Text>
        </View>
        <View>
          <Text className="text-2xl font-semibold text-gray-800">{item.name}</Text>
          <Text className="text-sm text-gray-500">{item.transliteration}</Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="text-sm text-gray-600">{item.translation}</Text>
        <Text className="text-xs text-gray-400">{item.total_verses} verses</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SurahCard