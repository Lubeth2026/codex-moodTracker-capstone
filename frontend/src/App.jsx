
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';

function App() {
  

  return (
    <>
      <h1>Moods</h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App
