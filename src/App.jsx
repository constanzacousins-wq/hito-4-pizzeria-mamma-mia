
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./views/Pizza";
import "./App.css";

// import Home from "./views/Home";
// import Cart from "./components/Cart";
// import Login from "./components/Login";
// import Register from "./components/Register";

function App() {
  return (
    <>
      <Navbar />

      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Cart /> */}

      <Pizza />

      <Footer />
    </>
  );
}

export default App;
