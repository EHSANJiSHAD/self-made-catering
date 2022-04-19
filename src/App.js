import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Banner from './components/Home/Banner/Banner';



function App() {
  return (
    <div>
      <Header></Header>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
