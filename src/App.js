
import './App.css';
import "tailwindcss/tailwind.css"
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import './App.css';

function App() {
  return (
    <div className="main-container mx-auto">
      <Header />
      <Resume />
    </div>
  );
}

export default App;
