import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import Gallery from "./components/Gallery";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App dark-background">
      <Container className="dark-background">
        <MyNav />
        <TopBar />
        <Gallery searchValue="Batman" />
        <Gallery searchValue="Joker" />
        {/*<Gallery searchValue="421241" /> si puo mettere un valore a caso per far comparire un alert di errore*/}
        <Gallery searchValue="Thor" />
        <Gallery searchValue="Superman" />
        <Gallery searchValue="Indiana Jones" />
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
