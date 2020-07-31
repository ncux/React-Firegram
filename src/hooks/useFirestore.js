import { useEffect, useState } from 'react';
import { firestore } from "../config/firebase";

const useFirestore = collection => {

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const unsubscribe = firestore.collection(collection).orderBy('createdAt', 'desc').onSnapshot((snap) => {
            let docs = [];
            snap.forEach(doc => {
                docs.push({ id: doc.id, ...doc.data() });
            });
            setDocuments(docs);
        });
        return () => unsubscribe();
    }, [collection]);


    return { documents };

};

export default useFirestore;
