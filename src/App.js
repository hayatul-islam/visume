
import './App.css';
import "tailwindcss/tailwind.css"
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import './App.css';
import GetStarted from './components/GetStarted/GetStarted';

function App() {
  return (
    <div className="main-container mx-auto">
      <Header />
      <Resume />
      <GetStarted />
    </div>
  );
}

export default App;
