// App.jsx
import "./App.css";
import Call from "./components/Call";
import Explain from "./components/Explain";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Scrolling from "./components/Scrolling";

function App() {
  return (
    <>
      <Header />
      <Scrolling />
      <Call />
      <Explain />
      <Footer />
    </>
  );
}

export default App;
