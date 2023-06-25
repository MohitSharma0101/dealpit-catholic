import { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  useEffect(() => {
    document.title = 'Dealpit Catholic';
  }, []);
  return (
    <Home/>
  );
}

export default App;
