import '../App.css'
import Navbar from '../components/navbar/navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
// import { motion } from 'framer-motion'
function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer/>
      </div>
    </>
  )
}

export default App;
