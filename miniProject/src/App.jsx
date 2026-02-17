import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import CitiesListPage from "./pages/CitiesListPage"
import CityDetailsPage from "./pages/CityDetailsPage"
import CreateCityPage from "./pages/CreateCityPage"
import EditCityPage from "./pages/EditCityPage"
import HomePage from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import PlaceDetailsPage from "./pages/PlaceDetailsPage"
import EditPlacePage from "./pages/EditPlacePage"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/cities" element={<CitiesListPage />} />
      <Route path="cities/:cityId" element={<CityDetailsPage />} />
      <Route path="/cities/create" element={<CreateCityPage />} />
      <Route path="/cities/edit/:cityId" element={ <EditCityPage /> } />
      <Route path="places/:placeId" element={<PlaceDetailsPage />} />
      <Route path="/places/edit/:placeId" element={ <EditPlacePage /> } />
      {/* error handling routes should be here */}
      <Route path="*" element={ <ErrorPage /> } />

    </Routes>
    
    <Footer/>

    </>
  )
}

export default App
