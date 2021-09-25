import AsyncStorage from "@react-native-async-storage/async-storage";

export default {
    setData: async (KEY, data) => {
        const stringified = JSON.stringify(data)
        await AsyncStorage.setItem(KEY, stringified)
    },

    removeData: async (KEY) => {
        await AsyncStorage.removeItem(KEY)
    },

    getData: async (KEY) => {
        const strified = await AsyncStorage.getItem(KEY)
        return JSON.parse(strified)
    }
}