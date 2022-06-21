import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Technical from "./components/Technical";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Technical/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
