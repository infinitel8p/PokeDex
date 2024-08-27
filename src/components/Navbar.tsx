import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    let bgColor = "bg-red-600";
    let txtColor = "text-white";
    let hoverColor = "hover:text-black";

    if (location.pathname === "/uranium") {
        bgColor = "bg-lime-500";
        txtColor = "text-black";
        hoverColor = "hover:text-white";
    } else if (location.pathname === "/insurgence") {
        bgColor = "bg-white";
        txtColor = "text-black";
        hoverColor = "hover:text-slate-300";
    }

    return (
        <div className={bgColor} style={{ position: "fixed", top: 0, left: 0, right: 0 }}>
            <nav>
                <ul className="px-2 py-0.5 flex justify-between">
                    <li className={`flex gap-4 ${txtColor}`}>
                        <a href="/" className={hoverColor}>Home</a>
                        <a href="/uranium" className={hoverColor}>Uranium</a>
                        <a href="/insurgence" className={hoverColor}>Insurgence</a>
                    </li>
                    <a href="/settings">Settings</a>
                </ul >
            </nav >
        </div >
    );
};

export default Navbar;
