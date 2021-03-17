import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images')
  return (
    <div className="container-fluid mt-3">
      <div className="card-columns" >
        {docs && docs.map(doc => (
          <div key={doc.id} className="card" data-toggle="modal" data-target="#myModal"
            onClick={() => setSelectedImg(doc.url)}>
            <img className="card-img-top" src={doc.url} alt="Card" />
          </div>)
        )}
      </div>
    </div>
  )
}

export default ImageGrid
