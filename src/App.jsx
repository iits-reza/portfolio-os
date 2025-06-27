import "./App.css";
import NavigationRail from "./components/NavigationRail/NavigationRail";
import Skills from "./components/Skills/Skills";
import TopHeader from "./components/TopHeader/TopHeader";

function App() {
  return (
    <div className="flex flex-row items-stretch">
      <NavigationRail />
      <div className="flex flex-col">
        <TopHeader />
        <Skills />
      </div>
    </div>
  );
}

export default App;
