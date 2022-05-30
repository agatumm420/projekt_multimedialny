import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Routez from "./routes";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routez />
      <Footer />
    </div>
  );
}

export default App;
