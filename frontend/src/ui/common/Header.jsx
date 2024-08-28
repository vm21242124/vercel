const Header = ({ username }) => {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Vercel Clone</div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#features" className="hover:underline">Features</a></li>
                        <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
                {username ?
                    <div className="text-lg font-bold">{username}</div> 
                :
                    <button className="bg-white text-gray-900 px-4 py-2 rounded">Sign In</button>
                }
            </div>
        </header>
    );
};
export default Header;