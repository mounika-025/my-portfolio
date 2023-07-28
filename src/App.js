import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLinks from "./Components/SocialLinks";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <ContactMe />
    </div>
  );
}

export default App;
