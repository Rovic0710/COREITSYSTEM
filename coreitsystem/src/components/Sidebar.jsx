
export default function Sidebar() {
    return (
        <aside className="bg-black text-white h-[calc(100vh-64px)] w-56">
            {/* Profile */}
            <div className="flex items-center justify-center bg-zinc-400 h-40">
                <img src="" alt="" />
            </div>

            {/* Navigation */}
            <nav className="p-5">
                <ul className="flex flex-col gap-2">
                    <a href="">
                        <img src="" alt="" />
                        <li className="block p-2 rounded-lg hover:bg-red-800">Dashboard</li>
                    </a>
                    <a href="">
                        <img src="" alt="" />
                        <li className="block p-2 rounded-lg hover:bg-red-800">EOD Report</li>
                    </a>
                    <a href="">
                        <img src="" alt="" />
                        <li className="block p-2 rounded-lg hover:bg-red-800">IT Schedule</li>
                    </a>
                    <a href="">
                        <img src="" alt="" />
                        <li className="block p-2 rounded-lg hover:bg-red-800">Maintenance Tracker</li>
                    </a>
                    <a href="">
                        <img src="" alt="" />
                        <li className="block p-2 rounded-lg hover:bg-red-800">Documentation</li>
                    </a>
                    <a href="">
                        <img src="" alt="" />
                        <li className="block p-2 rounded-lg hover:bg-red-800">IT Helpdesk Guide</li>
                    </a>
                    <a href="">
                        <img src="" alt="" />
                        <li className="block p-2 rounded-lg hover:bg-red-800">Device Inventory</li>
                    </a>
                </ul>
            </nav>
        </aside>
    );
}