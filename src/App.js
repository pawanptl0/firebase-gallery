import React, { useState } from 'react'
import Header from './components/header'
import ImageGrid from './components/imageGrid'
import Modal from './components/modal'
import Navbar from './components/navbar'
import UploadForm from './components/uploadForm'
const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <Navbar />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      <Modal selectedImg={selectedImg} />
    </>
  )
}

export default App

