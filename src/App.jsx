import { Route, Routes} from "react-router-dom";
import Header from './components/Header.jsx';
import MainPage from "./pages/MainPage.jsx";
import PhotoGallery from './pages/PhotoGallery.jsx';
import AboutUs from './pages/AboutUs.jsx';


function App() {

  return (
        <Header>
          <Routes>
            <Route path="/seniorWebsite/mainpage" element={<MainPage/>}/>
            <Route path="/seniorWebsite/photogallery" element={<PhotoGallery/>}/>
            <Route path="/seniorWebsite/aboutus" element={<AboutUs/>}/>

          </Routes>
          
        </Header>
        

  )
}

export default App
