import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="bg-black text-white h-[calc(100vh-64px)] w-56">
            {/* Profile */}
            <div className="flex items-center justify-center bg-zinc-400 h-40">
                {/* <img src="" alt="Admin" /> */}
            </div>

            {/* Navigation */}
            <nav className="p-5">
                <ul className="flex flex-col gap-2">
                    <li><Link to="/" className="block p-2 rounded-lg hover:bg-red-800">Dashboard</Link></li>
                    <li><Link to="/Report" className="block p-2 rounded-lg hover:bg-red-800">EOD Report</Link></li>
                    <li><Link to="/Schedule" className="block p-2 rounded-lg hover:bg-red-800">IT Schedule</Link></li>
                    <li><Link to="/Tracker" className="block p-2 rounded-lg hover:bg-red-800">Maintenance Tracker</Link></li>
                    <li><Link to="/Documentation" className="block p-2 rounded-lg hover:bg-red-800">Documentation</Link></li>
                    <li><Link to="/Guide" className="block p-2 rounded-lg hover:bg-red-800">IT Helpdesk Guide</Link></li>
                    <li><Link to="/Inventory" className="block p-2 rounded-lg hover:bg-red-800">Device Inventory</Link></li>
                </ul>
            </nav>
        </aside>
    );
}