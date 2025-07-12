import "./App.css";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Gallery from "./components/Gallery/Gallery";
import NavigationRail from "./components/NavigationRail/NavigationRail";
import Skills from "./components/Skills/Skills";
import TopHeader from "./components/TopHeader/TopHeader";

function App() {
  return (
    <div className="relative flex flex-row justify-center">
      <NavigationRail />
      <div className="flex flex-col">
        <TopHeader />
        <Gallery />
        <Skills />
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
