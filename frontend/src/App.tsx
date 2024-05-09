import { useState } from 'react';
import { BrowserRouter, Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.css';



function App() {  
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename="/app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game />} />
        </Routes>
     </BrowserRouter>
      <button className='bg-red-200'>
        Join room
      </button>
    </>
  )
}

export default App
