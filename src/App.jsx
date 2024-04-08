import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer"
import Artemis from "./pages/Artemis";
import EarthExpeditions from "./pages/EarthExpeditions";
import EarthObservatory from "./pages/EarthObservatory";
function App() {
  return (
    <>
      {/* <Blackbox/> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Artemis Program" element={<Artemis/>} />
        <Route path="/Earth Expeditions" element={<EarthExpeditions/>} />
        <Route path="/Earth Observatory Notes from the Field" element={<EarthObservatory/>} />
        <Route path="*" element={<h1 style={{backgroundColor:"white", color:"red"}}>Not Found!!!</h1>}/>
      </Routes>
      {/* <Footer /> */}
    </>

  );
}

export default App;
