import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import NavigationRail from "./components/NavigationRail/NavigationRail";
import Skills from "./components/Skills/Skills";
import TopHeader from "./components/TopHeader/TopHeader";

function App() {
  return (
    <div className="relative">
      <NavigationRail />
      <div className="flex flex-col">
        <TopHeader />
        <Gallery />
        <Skills />
      </div>
    </div>
  );
}

export default App;
