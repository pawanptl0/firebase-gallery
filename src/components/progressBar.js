import React, { useEffect } from 'react'
import useStorage from './../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file)
  let styleObj = { width: `${ progress }%` }

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress">
      <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
        style={styleObj}>{`${ progress }%`}</div>
    </div>
  )
}

export default ProgressBar
