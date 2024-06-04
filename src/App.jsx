import { Route, Routes} from "react-router-dom";
import Header from './components/Header.jsx';
import MainPage from "./pages/MainPage.jsx";
import AboutUs from './pages/AboutUs.jsx';
import Popeyes from './pages/Popeyes.jsx';



function App() {

  return (
        <Header className="">
          <Routes>
            <Route path="/seniorWebsite/mainpage" element={<MainPage/>}/>
            <Route path="/seniorWebsite/aboutus" element={<AboutUs/>}/>
            <Route path="/seniorWebsite/popeyeszone" element={<Popeyes/>}/>
          </Routes>
        </Header>
  )
}

export default App
