import './index.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Signup from './components/Signup'
import Login from './components/Login'
import Banner from './components/Banner'
import Products from './components/Products'
import Brand from "./components/Brand"
import Deal from "./components/Deal"
import Footer from './components/Footer'
// import Men from './components/Men'
import CasualSneakers from './components/CasualSneakers'
import FormalShoes from './components/FormalShoes'
import Loafers from './components/Loafers'
import SandalsSlippers from './components/SandalsSlippers'
import AboutProducts from './components/AboutProducts'
// import Women from './components/Women'
import WomenSneakers from './components/WomenSneakers'
import Heels from './components/Heels'
import WomenSandals from './components/WomenSandals'
import WomenBoots from './components/WomenBoots'
import Kids from './components/Kids'
import KidsSneakers from './components/KidsSneakers'
import KidsSandals from './components/KidsSandals'
import KidsSchoolShoes from './components/KidsSchoolShoes'
import KidsBoots from './components/KidsBoots'
import ContactUs from './components/ContactUs'
// import Demo from './components/Demo'
// import NavDemo from './components/NavDemo'





function App() {
  

  return (
    <>
     <Header />
     {/* <Demo/>
     <NavDemo/> */}
     <Routes>
      <Route path="/" element={<Banner/>} />
      <Route path="Signup" element={<Signup/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="/Products" element={<Products/>} />
      {/* <Route path="/Men" element={<Men/>} /> */}
      <Route path="/CasualSneakers" element={<CasualSneakers/>} />
      <Route path="/FormalShoes" element={<FormalShoes/>} />
      <Route path="/Loafers" element={<Loafers/>} />
      <Route path="/SandalsSlippers" element={<SandalsSlippers/>} />
      <Route path="/AboutProducts" element={<AboutProducts/>} />
      {/* <Route path="/Women" element={<Women/>}/> */}
      <Route path="/WomenSneakers" element={<WomenSneakers/>} />
      <Route path="/Heels" element={<Heels/>} />
      <Route path="/WomenSandals" element={<WomenSandals/>} />
      <Route path="/WomenBoots" element={<WomenBoots/>} />
      <Route path="/Kids" element={<Kids/>} />
      <Route path="/KidsSneakers" element={<KidsSneakers/>} />
      <Route path="/KidsSandals" element={<KidsSandals/>} />
      <Route path="/KidsSchoolShoes" element={<KidsSchoolShoes/>} />
      <Route path="/KidsBoots" element={<KidsBoots/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      
     </Routes>
     
     <Deal /> 
     <Brand/>
     <ContactUs/>
     <Footer />
     


    </>
  )
}

export default App
