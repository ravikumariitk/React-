import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import Navbar2 from './components/Navbar2';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  return (
   <>
   {/* <Router>
   <Navbar2></Navbar2>
   <Routes>
             <Route path='/Navbar' element={<Navbar2/>} />
             <Route path='/about' element={<About/>} />
    </Routes>
   </Router> */}
   <Navbar2></Navbar2>
   <Navbar></Navbar>
   <About></About>
</>
  );
}
export default App;
