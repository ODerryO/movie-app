import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./component/navBar/navBar";
import Footer from "./component/footer/Footer";
import setAuthToken from "./redux/utilities/setAuthToken";
import Routes from "./Routes";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;
