import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function DrawerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const toggleDrawer = () => setIsOpen(!isOpen);
  const switchTab = (tab) => setActiveTab(tab);

  return (
    <div>
      {/* Hamburger Icon */}
      <button onClick={toggleDrawer} className="text-2xl p-4">
        <FiMenu />
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <img src="/logo.png" alt="Logo" className="h-6" />
          <button onClick={toggleDrawer} className="text-xl text-blue-600">
            <FiX />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "profile"
                ? "border-b-2 border-blue-600 text-black"
                : "text-gray-400"
            }`}
            onClick={() => switchTab("profile")}
          >
            PROFILE
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "filter"
                ? "border-b-2 border-blue-600 text-black"
                : "text-gray-400"
            }`}
            onClick={() => switchTab("filter")}
          >
            FILTER DATA
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4 text-sm text-gray-700">
          {activeTab === "profile" && (
            <ul className="space-y-3">
              <li>Retailer Register</li>
              <li>Customer Register</li>
              <li>Login</li>
            </ul>
          )}

          {activeTab === "filter" && (
            <ul className="space-y-3">
              <li>Category Filter</li>
              <li>Location Filter</li>
              <li>Price Range</li>
              {/* Add your filter UI here */}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
