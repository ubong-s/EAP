import React from "react"
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lng: 7.9439141682679875, lat: 5.027933760324891 }}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap
