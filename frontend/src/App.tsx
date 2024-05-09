import { BrowserRouter, Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.css';
import { Game } from './screens/Game';
import { Landing } from './screens/Landing';



function App() {  
  return (
    <div className="h-screen bg-slate-800">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game />} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
