// import CookieConsent from "./components/cookies&privacy/CookieConsent";
import GTMBody from "./GTMBody";
import Routers from "./router/Routers";

function App() {
  return (
    <>
      <GTMBody />
      <div>
        <Routers />
        {/* <CookieConsent /> */}
      </div>
    </>
  );
}

export default App;
