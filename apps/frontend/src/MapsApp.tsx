import { Screen } from './screens'
import { PlacesProvider } from './context'

const MapsApp = () => {
  return (
    <PlacesProvider> 
        <Screen />
    </PlacesProvider>
  )
}

export default MapsApp