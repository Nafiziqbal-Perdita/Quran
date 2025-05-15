import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const SurahCard = ({ item }) => {
  const router=useRouter();
  return (
    <TouchableOpacity 
      className="flex-row items-center justify-between p-4 border-b border-gray-200"
      onPress={() => router.push(`../surah/${item.id}`) }
    >
      <View className="flex-row items-center">
        <View className="w-10 h-10 bg-[#16B85F] rounded-full items-center justify-center mr-3 shadow-sm">
          <Text className="text-white font-bold text-lg">{item.id}</Text>
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