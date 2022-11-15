import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "../src/components/Main/Main.jsx";
import Shedule from "../src/components/ShedulePage/ShedulePage.jsx";

const Links = () => {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/RayVSDudka-app" element={<Main />} />
        <Route path="/shedule" element={<Shedule />} />
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
