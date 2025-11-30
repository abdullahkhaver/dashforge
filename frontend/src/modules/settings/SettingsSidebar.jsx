import { FaUserCog, FaPalette, FaCode, FaChevronRight } from 'react-icons/fa';

export default function SettingsSidebar({ activeSection, setActiveSection }) {
  const menuItems = [
    {
      id: 'account',
      label: 'Account Settings',
      icon: FaUserCog,
      description: 'Manage your account details',
    },
    {
      id: 'appearance',
      label: 'Appearance',
      icon: FaPalette,
      description: 'Customize the look and feel',
    },
    {
      id: 'developer',
      label: 'Developer',
      icon: FaCode,
      description: 'API keys and advanced settings',
    },
  ];

  return (
    <div className="p-6">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 shadow-lg'
                  : 'hover:bg-gray-700/50 hover:border hover:border-gray-600/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      isActive
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300 group-hover:bg-blue-500 group-hover:text-white'
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <p
                      className={`font-medium transition-colors duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-300 group-hover:text-white'
                      }`}
                    >
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
                <FaChevronRight
                  size={12}
                  className={`text-gray-400 transition-all duration-300 ${
                    isActive
                      ? 'rotate-90 text-blue-400'
                      : 'group-hover:translate-x-1'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
