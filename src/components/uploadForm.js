import React, { useState } from 'react'
import ProgressBar from './progressBar';

const UploadForm = () => {

  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const types = ['image/jpeg', 'image/png']

  const handleChange = (event) => {
    let selected = event.target.files[0]
    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError(null)
    } else {
      setFile(null)
      setError(`Please select valid Image file(jpeg,png)`)
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col col-sm-8 col-md-8 col-lg-5 col-xl-5">
          <form>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile"
                onChange={handleChange} />
              <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            </div>
          </form>
          <div>
            <p className="text-danger">{error}</p>
            {file && <ProgressBar file={file} setFile={setFile} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadForm

