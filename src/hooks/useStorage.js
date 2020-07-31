import { useState, useEffect } from 'react';
import { firestore, storage, timestamp } from "../config/firebase";

const useStorage = image => {

    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);

    const uploadImage = async () => {
        const storageReference = storage.ref(image.name);
        const imageDownloadUrlsCollection = firestore.collection('imageDownloadUrls');

        await storageReference.put(image).on('state_changed', snap => {
            let status = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(status);
        }, err => setError(err),  async () => {
            const downloadUrl = await storageReference.getDownloadURL();
            await imageDownloadUrlsCollection.add({ downloadUrl, createdAt: timestamp() });
            setUrl(downloadUrl);
        });
    };

    useEffect(() => {
        uploadImage();
    }, [image]);

    return { progress, url, error };

};

export default useStorage;

