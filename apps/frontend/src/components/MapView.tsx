import { useContext, useLayoutEffect, useRef } from 'react'
import { PlaceContext } from '../context'
import Loading from './Loading'
import { Map } from 'mapbox-gl'

const MapView = () => {
    const { isLoading, userLocation } = useContext(PlaceContext)
    const mapDiv = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (!isLoading) {
            const map = new Map({
                container: mapDiv.current!, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 14, // starting zoom
            });
        }
    }, [isLoading]) //Se va a ejecutar cada vez que el is loading cambia

    if (isLoading) {
        return (<Loading />)
    }
    return (
        <div ref={mapDiv} style={{
            height: '20rem',
            width: '30rem',

        }}>{userLocation?.join(',')}</div> //userLocation puede venir nulo, sino hace el join
    )
}

export default MapView