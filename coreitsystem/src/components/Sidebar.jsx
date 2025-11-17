import { Link } from "react-router-dom";
import admin from "../assets/icons/admin.png"
import dashboard from "../assets/icons/dashboard.png"
import report from "../assets/icons/seo-report.png"
import schedule from "../assets/icons/schedule.png"
import tracker from "../assets/icons/tracker.png"
import documentation from "../assets/icons/documents.png"
import guide from "../assets/icons/guide.png"
import inventory from "../assets/icons/inventory.png"

export default function Sidebar() {
    return (
        <aside className="bg-black text-white h-[calc(100vh-64px)] w-16 md:min-w-68">
            {/* Profile */}
            <div className="flex flex-col items-center justify-center bg-white text-black h-40">
                <div className="h-20 w-20 rounded-lg">
                    <img src={admin} alt="Admin" />
                </div>
                <div className="hidden md:flex flex-col items-center">
                    <strong>Name Of the User</strong>
                    <small>account number</small>
                </div>
                
            </div>

            {/* Navigation */}
            <nav className="py-5 p-2">
                <ul className="flex flex-col gap-2">
                    <li><Link to="/" className="block p-2 rounded-lg hover:bg-red-800 flex gap-2">
                        <img src={dashboard} alt="Dashboard" className="h-10 w-10 object-contain"/>
                        <span className="hidden md:flex flex-col justify-center font-bold whitespace-nowrap">Dashboard</span>
                    </Link></li>

                    <li><Link to="/Report" className="block p-2 rounded-lg hover:bg-red-800 flex gap-2">
                        <img src={report} alt="End of Day Report" className="h-10 w-10 object-contain"/>
                        <h3 className="hidden md:flex flex-col justify-center font-bold whitespace-nowrap">EOD Report</h3>
                    </Link></li>

                    <li><Link to="/Schedule" className="block p-2 rounded-lg hover:bg-red-800 flex gap-2">
                        <img src={schedule} alt="IT Schedule" className="h-10 w-10 object-contain"/>
                        <h3 className="hidden md:flex flex-col justify-center font-bold whitespace-nowrap">IT Schedule</h3>
                    </Link></li>

                    <li><Link to="/Tracker" className="block p-2 rounded-lg hover:bg-red-800 flex gap-2">
                        <img src={tracker} alt="Maintenance Tracker" className="h-10 w-10 object-contain"/>
                        <h3 className="hidden md:flex flex-col justify-center font-bold whitespace-nowrap">Maintenance Tracker</h3>
                    </Link></li>

                    <li><Link to="/Documentation" className="block p-2 rounded-lg hover:bg-red-800 flex gap-2">
                        <img src={documentation} alt="Documentation" className="h-10 w-10 object-contain"/>
                        <h3 className="hidden md:flex flex-col justify-center font-bold whitespace-nowrap">Documentation</h3>
                    </Link></li>

                    <li><Link to="/Guide" className="block p-2 rounded-lg hover:bg-red-800 flex gap-2">
                        <img src={guide} alt="IT Helpdesk Guide" className="h-10 w-10 object-contain"/>
                        <h3 className="hidden md:flex flex-col justify-center font-bold whitespace-nowrap">IT Helpdesk Guide</h3>
                    </Link></li>

                    <li><Link to="/Inventory" className="block p-2 rounded-lg hover:bg-red-800 flex gap-2">
                        <img src={inventory} alt="Device Inventory" className="h-10 w-10 object-contain"/>
                        <h3 className="hidden md:flex flex-col justify-center font-bold whitespace-nowrap">Device Inventory</h3>
                    </Link></li>
                </ul>
            </nav>
        </aside>
    );
}