import { useEffect, useState, useRef } from "react";
import { collection, onSnapshot, query, where ,orderBy, limit} from 'firebase/firestore';
import { db } from '../firebase.config';

export const useCollection = (collectionName, _query, _orderBy) => {
    const [document, setDocument] = useState([]);
    let [isLoading, setIsLoading] = useState(false);

    const currentQuery = useRef(_query).current;
    let orderB = useRef(_orderBy).current;

    useEffect(() => {
        let ref = collection(db, collectionName);

        if(currentQuery) {
            ref = query(ref, where(...currentQuery), orderBy("createdAt"));
        }

        // if(currentQuery && orderBy) {
        //     ref = query(ref, where(...currentQuery))
        // }

        setIsLoading(true);

        const unSubscribe = onSnapshot(ref, (snapshot) => {
            let result = [];
            snapshot.docs.forEach(doc => {
                result.push({ ...doc.data(), id: doc.id });
            })
            setDocument(result);
            setIsLoading(false);
        })

        return () => unSubscribe()
    }, [collectionName, currentQuery, orderB]);

    return { document, isLoading };
};