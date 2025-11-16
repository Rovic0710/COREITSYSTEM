import logo from "../assets/Images/core-logo.png"
import setting from "../assets/icons/settings.png"

export default function Navbar() {
    return (
        <header className="bg-black text-white p-3">
            <nav className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="" className="h-10 w-10 object-contain"/>
                    <div className="flex">
                        <p className="font-bold">COREIT</p>
                        <p className="font-normal">SYSTEM</p>
                    </div>
                </div>
                
                <div className="flex flex-row-reverse mr-4">
                    <div>
                        <img src={setting} alt="" className="h-8 w-8 flex items-center space-x-2"/>
                    </div>
                    
                </div>
            </nav>
        </header>
    );
}