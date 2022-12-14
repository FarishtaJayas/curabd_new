import { useEffect, useReducer, useState } from "react"
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore'
import { db, timeStamp } from "../firebase.config"

const initialState = {
    document: null,
    error: null,
    isLoading: null,
    success: null
}

const fireStoreReducer = (state, { type, payload }) => {
    switch (type) {
        case "IS_LOADING":
            return { document: null, error: null, isLoading: true, success: null }

        case "ADD_DOCUMENT":
            return { document: payload, error: null, isLoading: false, success: true }

        case "UPDATE_DOCUMENT":
            return { document: payload, error: null, isLoading: false, success: true }

        case "ERROR":
            return { document: null, error: payload, isLoading: false, success: false }

        default:
            return state
    }
}

export const useFirestore = (collectionName) => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [response, dispatch] = useReducer(fireStoreReducer, initialState)

    const ref = collection(db, collectionName)

    // dispatch if not cancelled
    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action)
        }
    }

    // Adding Document to database
    const addDocument = async (doc) => {
        dispatch("IS_LOADING")

        try {
            const creatingDate = timeStamp.fromDate(new Date())
            const addDocument = await addDoc(ref, { ...doc, creatingDate })
            dispatchIfNotCancelled({ type: "ADD_DOCUMENT", payload: addDocument })
        }
        catch (error) {
            dispatch({ type: "ERROR", payload: error.message })
        }
    }

    // update something from firestore database
    const updateDocument = async (id, obj) => {
        dispatch({ type: "IS_PENDING" })
        try {
            const userDoc = doc(ref, id)
            const newField = obj
            const updated = await updateDoc(userDoc, newField)
            dispatchIfNotCancelled({ type: "UPDATE_DOCUMENT", payload: updated })
        }
        catch (error) {
            dispatch({ type: "ERROR", payload: error.message })
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, response, updateDocument }
}