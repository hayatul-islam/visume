
import './App.css';
import "tailwindcss/tailwind.css"
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import About from './components/About/About';

function App() {
  return (
    <div className="main-container mx-auto">
      <Header />
      <Resume />
      <GetStarted />
      <About />
    </div>
  );
}

export default App;
