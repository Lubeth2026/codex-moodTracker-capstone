
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import ManageMood from './components/ManageMood';
import NavBar from './components/NavBar';

function App() {
  

  return (
    <>
      <NavBar />
      <main>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/moods" element={<Dashboard />} />
        <Route path="/manage" element={<ManageMood />} />
        <Route path="/manage/:id" element={<ManageMood />} />
      </Routes>
      </main>
    </>
  );
}

export default App
