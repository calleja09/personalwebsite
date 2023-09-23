import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NotFound from './components/NotFound';
import data from "./assets/data";


function App() {
  const {Info : {fMName, lName}} = data

  return (
    <>
      <div className='main'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home fMName={fMName} lName={lName}/>} exact/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
