// App.jsx
import "./App.css";
import Call from "./components/Call";
import Explain from "./components/Explain";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Scrolling from "./components/Scrolling";
import WebDeveloper from "./components/WebDeveloper";

function App() {
  return (
    <>
      <Header />
      <Scrolling />
      <Call />
      <Explain />
      <Footer />
      <WebDeveloper/>
    </>
  );
}

export default App;
