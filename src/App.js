
import './App.css';
import "tailwindcss/tailwind.css"
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import About from './components/About/About';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="main-container mx-auto pb-6">
      <Header />
      <Resume />
      <GetStarted />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
