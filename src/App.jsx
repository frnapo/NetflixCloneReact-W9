import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App bg-dark">
      <MyNav />
      <TopBar />
      <Gallery />
      <MyFooter />
    </div>
  );
}

export default App;
