import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/work";
import Footer from "./components/Footer/footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works />
        <Routes>
          <Route path="/" elements={<Intro/>}/>
          <Route path="/skills" elements={<Skills/>}/>
          <Route path="/works" elements={<Works/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
