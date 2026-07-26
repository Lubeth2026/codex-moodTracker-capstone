
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';

function App() {
  

  return (
    <>
      <h1>Moods</h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/moods" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App
