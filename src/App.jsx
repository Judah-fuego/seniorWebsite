import { Route, Routes} from "react-router-dom";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainPage from "./pages/MainPage.jsx";
import AboutUs from './pages/AboutUs.jsx';



function App() {

  return (
        <Header>
          <Routes>
            <Route path="/seniorWebsite/mainpage" element={<MainPage/>}/>
            <Route path="/seniorWebsite/aboutus" element={<AboutUs/>}/>
          </Routes>
          <Footer/>
        </Header>
        

  )
}

export default App
