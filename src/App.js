import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../src/components/Main/Main.jsx";
import Shedule from "../src/components/ShedulePage/ShedulePage.jsx";
import LocationsPage from "../src/components/LocationsPage/LocationsPage.jsx";
import AudioPage from "../src/components/AudioPage/AudioPage.jsx";
import PhotoPage from "../src/components/PhotosPage/PhotosPage.jsx";
import QuotesPage from "../src/components/QuotesPage/QuotesPage.jsx";

const Links = () => {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/RayVSDudka-app" element={<Main />} />
        <Route path="/shedule" element={<Shedule />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Links />
      </BrowserRouter>
    </div>
  );
}

export default App;
