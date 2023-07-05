
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MainRoute } from "./routes/MainRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/Footer";



function App() {
  return (
    <div className="bg-G">
      <Navbar />
      <MainRoute />
      <ToastContainer />
      <Footer/>
    

    </div>
  );
}

export default App;
