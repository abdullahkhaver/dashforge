import { useState, useRef, useEffect } from 'react';
import { FaUserCircle, FaBell, FaCog, FaSearch } from 'react-icons/fa';
import useAuth from '../../modules/auth/useAuth';
import { useNavigate } from 'react-router-dom';
export default function Topbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notificationsRef = useRef(null);
  const { logout, user } = useAuth();

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(e.target)
      ) {
        setNotificationsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const notifications = [
    { id: 1, text: 'New user registered', time: '5 min ago', unread: true },
    {
      id: 2,
      text: 'Server backup completed',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      text: 'New comment on blog post',
      time: '2 hours ago',
      unread: false,
    },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

const handleSettingsClick = () => {
  navigate('/settings');
  }

  return (
    <div className="w-full bg-gray-800/80 backdrop-blur-lg h-16 flex items-center justify-between px-6 border-b border-gray-700/50 relative">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative" ref={notificationsRef}>
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 group"
          >
            <FaBell size={18} />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-lg border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden z-50">
              <div className="p-4 border-b border-gray-700/50">
                <h3 className="text-white font-semibold">Notifications</h3>
                <p className="text-gray-400 text-sm">{unreadCount} unread</p>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200 ${
                      notification.unread ? 'bg-blue-900/10' : ''
                    }`}
                  >
                    <p className="text-white text-sm">{notification.text}</p>
                    <p className="text-gray-400 text-xs mt-1">
                      {notification.time}
                    </p>
                  </div>
                ))}
              </div>
              <button className="w-full p-3 text-center text-blue-400 hover:bg-gray-700/50 transition-colors duration-200 text-sm font-medium">
                View All Notifications
              </button>
            </div>
          )}
        </div>

        {/* Settings */}
        <button
          onClick={handleSettingsClick}
          className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 transform hover:rotate-90"
        >
          <FaCog size={18} />
        </button>

        {/* User Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group"
            onClick={() => setOpen(!open)}
          >
            <div className="relative">
              <FaUserCircle
                size={32}
                className="text-gray-300 group-hover:text-white transition-colors duration-300"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
            </div>
            <div className="text-left hidden md:block">
              <p className="text-white font-medium text-sm">
                {user?.name || 'Admin User'}
              </p>
              <p className="text-gray-400 text-xs">Administrator</p>
            </div>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-lg border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden z-50">
              <div className="p-4 border-b border-gray-700/50">
                <p className="text-white font-medium">
                  {user?.name || 'Admin User'}
                </p>
                <p className="text-gray-400 text-sm">
                  {user?.email || 'admin@dashforge.com'}
                </p>
              </div>

              <button
                className="w-full text-left px-4 py-3 hover:bg-gray-700/50 text-gray-200 transition-colors duration-200 flex items-center space-x-2"
                onClick={() => alert('Profile page coming soon')}
              >
                <FaUserCircle className="text-gray-400" />
                <span>Profile</span>
              </button>

              <button
                className="w-full text-left px-4 py-3 hover:bg-gray-700/50 text-gray-200 transition-colors duration-200 flex items-center space-x-2"
                onClick={() => alert('Settings page coming soon')}
              >
                <FaCog className="text-gray-400" />
                <span>Settings</span>
              </button>

              <div className="border-t border-gray-700/50">
                <button
                  className="w-full text-left px-4 py-3 hover:bg-red-900/20 text-red-400 transition-colors duration-200 flex items-center space-x-2"
                  onClick={() => logout() || (window.location.href = '/login')}
                >
                  <span>🚪</span>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
