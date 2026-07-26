
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import ManageMood from './components/ManageMood';

function App() {
  

  return (
    <>
      <h1>Moods</h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/moods" element={<Dashboard />} />
        <Route path="/manage" element={<ManageMood />} />
        <Route path="/manage/:id" element={<ManageMood />} />
      </Routes>
    </>
  );
}

export default App
