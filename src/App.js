import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Faq from "./components/faq/Faq";
import Hero from "./components/hero/Hero";
import Pricing from "./components/pricing/Pricing";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/global/Nav";


function App() {
  return (
    <>
    {/* <Nav /> */}
    <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer/> */}
      
 
    </>
  );
}

export default App;
