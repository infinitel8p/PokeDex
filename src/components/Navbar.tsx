const Navbar = () => {
    return (
        <div className="bg-red-600" style={{ position: "fixed", top: 0, left: 0, right: 0 }}>
            <nav>
                <ul className="flex gap-2 px-2 py-0.5">
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
