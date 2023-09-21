import Layout from "./components/Layout/Layout";
import About from './pages/About'
import HomePage from './pages/HomePage'
import {Routes, Route} from 'react-router-dom'
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<contact/>} />
    <Route path="/pagenotfound" element={<PageNotFound/>} />
    <Route path="/policy" element={<Policy/>} />
   </Routes>
    </>
  );
}

export default App;
