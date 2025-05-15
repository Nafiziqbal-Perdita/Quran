import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFetch from '../hook/useFetch';
import { fetchSurah } from '../services/api';

const BISMILLAH = {
    text: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
    translation: 'In the name of Allah, the Most Gracious, the Most Merciful.'
};

const SurahDetails = () => {
    const { id } = useLocalSearchParams();

    const {
        data,
        error,
        loading
    } = useFetch(() => fetchSurah({ id }));

    if (loading) {
        return (
            <SafeAreaView className="flex-1 items-center justify-center bg-white">
                <Text className="text-lg text-gray-600">Loading Surah...</Text>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView className="flex-1 items-center justify-center bg-white">
                <Text className="text-lg text-red-500">Error loading Surah</Text>
            </SafeAreaView>
        );
    }

    const renderVerse = ({ item }) => (
        <View className="flex-row items-start mb-6 px-2">
            {/* Verse number circle */}
            <View className="w-8 h-8 rounded-full bg-[#5B3FA2] items-center justify-center mt-1 mr-3">
                <Text className="text-[#CDF6E2] font-bold">{item.id}</Text>
            </View>
            {/* Verse content stacked vertically */}
            <View className="flex-1 bg-gray-50 rounded-lg p-4">
                <Text
                    className="text-4xl text-gray-900 mb-2"
                    style={{ fontFamily: 'sans-serif', textAlign: 'right' }}
                >
                    {item.text}
                </Text>
                <Text
                    className="text-base text-gray-700"
                    style={{ textAlign: 'left' }}
                >
                    {item.translation}
                </Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1  bg-[#16B85F]">
         <View className="bg-[#F2FFF8]" >
               <FlatList
                data={data?.verses || []}
                renderItem={renderVerse}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    data ? (
                        <View
                            className="mb-6 mx-2 mt-2 rounded-2xl shadow-lg"
                            style={{
                                backgroundColor: '#e6f9f0',
                                elevation: 4,
                                shadowColor: '#16B85F',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.15,
                                shadowRadius: 6,
                                padding: 20,
                                alignItems: 'center',
                            }}
                        >
                          
                            {/* Surah Name and Info */}
                            <Text className="text-4xl font-extrabold text-[#16B85F] tracking-wide">
                                {data.name || ''}
                            </Text>
                            <View
                                style={{
                                    width: 48,
                                    height: 4,
                                    backgroundColor: '#16B85F',
                                    borderRadius: 2,
                                    marginVertical: 10,
                                }}
                            />
                            <Text className="text-xl text-gray-700 font-semibold mb-1">
                                {data.translation || ''}
                            </Text>
                            <Text className="text-base text-gray-500">
                                {data.total_verses ? `${data.total_verses} Verses` : ''}
                            </Text>

                              {/* Bismillah Section */}
                              <Text className="text-5xl text-[#5B3FA2] font-extrabold text-center mb-2" style={{ lineHeight: 54 }}>
                                {BISMILLAH.text}
                            </Text>
                            <Text className="text-base text-gray-700 text-center mb-4">
                                {BISMILLAH.translation}
                            </Text>
                        </View>
                    ) : null
                }
            />
         </View>
        </SafeAreaView>
    );
}

export default SurahDetails