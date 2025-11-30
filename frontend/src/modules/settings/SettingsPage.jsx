import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import SettingsSidebar from './SettingsSidebar';
import AccountSettings from './AccountSettings';
import AppearanceSettings from './AppearanceSettings';
import DevSettings from './DevSettings';

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('account');
  const navigate = useNavigate();

  const renderSection = () => {
    switch (activeSection) {
      case 'account':
        return <AccountSettings />;
      case 'appearance':
        return <AppearanceSettings />;
      case 'developer':
        return <DevSettings />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-300 hover:text-white mb-6
                     transition-colors duration-200"
        >
          <IoArrowBack size={22} />
          <span className="font-medium">Back</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">
            Manage your account preferences and settings
          </p>
        </div>

        {/* Settings Container */}
        <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-700/50">
              <SettingsSidebar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 lg:p-8">{renderSection()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
