import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    //create a reference
    const storageRef = projectStorage.ref(file.name)
    const collectionRef = projectFirestore.collection('images');

    /*send file name to storage, It returs a promis so 'on' is similar like 'then' and has multiple arguments, first is 'title', second is callback function for success, third is error fuction for error, fourth is mostly 'async' function when all operation is done*/
    storageRef.put(file).on('storage_updated', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(Math.floor(percentage))
    }, (error) => {
      setError(error)
    }, async () => {
      const url = await storageRef.getDownloadURL()
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt });
      setUrl(url)
    })

  }, [file])

  return { progress, url, error }
}

export default useStorage
