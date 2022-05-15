import React from 'react';
import logo from '../../../assets/images/logo.png';
const Header = () => {
    return (
        <div className="max-w-screen-lg mx-auto py-4">
            <div className="flex items-center justify-between">
                <div>
                    <img className="w-40" src={logo} alt="" />
                </div>
                <div className="ml-10">
                    <input type="text" className="border border-gray-300 py-1 px-2" placeholder="Search..." />
                    <button className="border border-gray-300 bg-gray-300 hover:bg-gray-200 py-1 px-3">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;