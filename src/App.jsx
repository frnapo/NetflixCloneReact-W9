import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import Gallery from "./components/Gallery";
import { Container } from "react-bootstrap";
//
//da qui import per la profile page
//
//import HeaderComponent from "./components/HeaderComponent";
//import ProfileComponent from "./components/ProfileComponent";
//import MaturityComponent from "./components/MaturityComponent";
//import AutoplaySettingsComponent from "./components/AutoplaySettingsComponent";
//import ButtonComponents from "./components/ButtonsComponent";
//
//da qui import per la settings page
//
//import MembershipBillingComponent from "./components/MembershipBillingComponent";
//import PlanDetailsComponent from "./components/PlanDetailsComponent";
//import SettingsComponent from "./components/SettingsComponent";
//import MyProfileComponent from "./components/MyProfileComponent";

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
        {/* da qui profile page*/}
        {/*<HeaderComponent />
        <ProfileComponent />
        <MaturityComponent />
        <AutoplaySettingsComponent />
        <ButtonComponents /> refactor profile page*/}
        {/* da qui settings page si vede il background laterale grigio scuro per via del div class App e del container che hanno la classe dark-background, tolta quella è perfetto :) (credo...e spero)*/}
        {/*<MyNav />
        <Container>
          <MembershipBillingComponent />
          <PlanDetailsComponent />
          <SettingsComponent />
          <MyProfileComponent/>
        </Container> */}
      </Container>
    </div>
  );
}

export default App;
