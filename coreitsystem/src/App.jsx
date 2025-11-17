import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Report } from './pages/Report';
import { Schedule } from './pages/Schedule';
import { Tracker } from './pages/Tracker';
import { Documentation } from './pages/Documentation';
import { Guide } from './pages/Guide';
import { Inventory } from './pages/Inventory';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="bg-zinc-300 w-screen">
          {/* Navigation Button of Sidebar */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Report" element={<Report/>}/>
            <Route path="/Schedule" element={<Schedule/>}/>
            <Route path="/Tracker" element={<Tracker/>}/>
            <Route path="/Documentation" element={<Documentation/>}/>
            <Route path="/Guide" element={<Guide/>}/>
            <Route path="/Inventory" element={<Inventory/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;