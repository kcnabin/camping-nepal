import { useFetchData } from "../../customHooks/useFetchData"
import LoadingIcon from "../../svg-icons/LoadingIcon"
import PlaceCarousel from "./components/PlaceCarousel"
import AllPlaces from "./components/AllPlaces"

const IndexPage = () => {
  const allPlacesUrl = '/places/all'
  const { value: allPlaces } = useFetchData(allPlacesUrl)
  console.log('allPlaces :', allPlaces);

  if (allPlaces) {
    return (
      <div>
        <PlaceCarousel allPlaces={allPlaces} />

        <div className="mx-2 mx-md-3 mx-xl-4">
          <AllPlaces allPlaces={allPlaces} />
        </div>

      </div>
    )
  }

  return (<LoadingIcon />)
}

export default IndexPage