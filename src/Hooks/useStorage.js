import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase.config';

export const useStorage = (file) => {
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const storageRef = ref(projectStorage, `files/${file?.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
            },
            (err) => setError(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL)
                });
            }
        );
    }, [file])

    return { url, error, progress }
}




// export const useStorage = async (file) => {
//     const [error, setError] = useState(null);
//     const [url, setUrl] = useState(null);
//     // const [progress, setProgress] = useState(0)

//     try {
//         const storageRef = ref(projectStorage, `files/${file?.name}`);
//         const img = await uploadBytes(storageRef, file);

//         const photoURL = await getDownloadURL(storageRef);
//         setUrl(photoURL)
//     } catch (err) {
//         setError("Could not Upload");
//     }


//     return { url, error }
// }