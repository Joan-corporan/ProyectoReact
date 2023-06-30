
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MainRoute } from "./routes/MainRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <MainRoute />
      <ToastContainer />
      <Footer/>
    

    </>
  );
}

export default App;
