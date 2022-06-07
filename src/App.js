import screen from "../src/assets/chart3.png";
import image from "../src/assets/Rect.png";
import "./App.css";
import Header from "./components/header";
import HedaerContent from "./components/headerContent";
import Feature from "./components/features";
import Automated from "./components/automated";
import Prebuild from "./components/prebuils";
import Fully from "./components/fully";
import Footer from "./components/footer";
import FooterContent from "./components/footerContent";
import Cards from "./components/card";

function App() {
  return (
    <div className="App">
      <div className="upper_div">
        <Header />
        <HedaerContent />
      </div>
      <div className="img1">
        <img src={screen} className="image1"></img>
      </div>
      <div className="img2">
        <img src={image} className="image2"></img>
      </div>
      <Feature />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "100px 0px",
          justifyContent: "center",
        }}
      >
        <Automated />
        <Fully />
        <Prebuild />
      </div>
      <div className="lower_div">
        <FooterContent />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
