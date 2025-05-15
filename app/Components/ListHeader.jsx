import React from 'react'
import { Text, View } from 'react-native'

const ListHeader = () => {
  return (
    <View className="px-4 py-3 bg-gray-50 border-b border-gray-200">
      <Text className="text-lg font-semibold text-[#16B85F]">All Surahs</Text>
      <Text className="text-sm text-gray-500 mt-1">114 Surahs in the Holy Quran</Text>
    </View>
  )
}

export default ListHeader 