import React, { useContext, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Pressable,
    TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { getApps, initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
    apiKey: "AIzaSyDwrtc5Y9Voe90NUKqxHHA9GGrshIEo6S8",
    authDomain: "tp-final-1f510.firebaseapp.com",
    projectId: "tp-final-1f510",
    storageBucket: "tp-final-1f510.appspot.com",
    messagingSenderId: "201879205186",
    appId: "1:201879205186:web:a23ae6c2e26e3461ef04db"
};

if (!getApps().length) {
    const app = initializeApp(firebaseConfig);
}

export const Upload = () => {
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    const handlePickImage = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        console.log({ pickerResult });

        handleImagePicked(pickerResult);
    };

    const handleImagePicked = async (pickerResult) => {
            setUploading(true);

            if (!pickerResult.canceled) {
                const uploadUrl = await uploadImageAsync(pickerResult.uri);
                setImage(uploadUrl);
            }
      
    };

    async function uploadImageAsync(uri) {
            const response = await fetch(uri);
            const blob = await response.blob();

            const filePath = uuidv4();
            const fileRef = ref(getStorage(), filePath);
            const result = await uploadBytes(fileRef, blob);

            const downloadURL = await getDownloadURL(fileRef);
            setUrl(downloadURL);
            console.log(downloadURL);

            return downloadURL;
      
    }

    return (
        <View>
            <Pressable
                style={styles.icono}
                onPress={() => {
                    handlePickImage();
                }}
                onChange={() => { }}
            >
                <MaterialCommunityIcons
                    style={styles.uplImage}
                    name="file-image-plus"
                    size={120}
                    color="black"
                />
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    texto: {
        opacity: 0.7,
        fontSize: 18,
    }
});

export default Upload;