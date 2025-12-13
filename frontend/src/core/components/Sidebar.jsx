import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { path: '/', label: 'Dashboard', icon: '' },
    { path: '/blog', label: 'Blog', icon: '' },
    { path: '/notes', label: 'Notes', icon: '' },
    { path: '/products', label: 'Products', icon: '' },
  ];

  return (
    <div
      className="w-64 bg-gray-800/80 backdrop-blur-lg h-full p-6 border-r border-gray-700/50 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-900/20 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-900/20 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Logo Section */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center space-x-3 transform transition-transform duration-300 hover:scale-105">
          <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg border border-gray-600">
            <span className="text-white font-bold text-lg">DF</span>
          </div>
          <h1 className="text-2xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            DashForge
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700/50 hover:border hover:border-gray-600/50'
              }`}
            >
              <span className="text-lg transform transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <span className="font-medium transform transition-transform duration-300 group-hover:translate-x-1">
                {item.label}
              </span>
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="p-3 bg-gray-700/30 rounded-xl border border-gray-600/30 backdrop-blur-sm">
          <p className="text-xs text-gray-400 text-center">
            v1.0.0 • Dash Forge
          </p>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
