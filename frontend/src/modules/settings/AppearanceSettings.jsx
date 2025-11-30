import { useState } from 'react';
import {
  FaMoon,
  FaSun,
  FaDesktop,
  FaEye,
  FaSave,
  FaPalette,
} from 'react-icons/fa';

export default function AppearanceSettings() {
  const [theme, setTheme] = useState('dark');
  const [fontSize, setFontSize] = useState('medium');
  const [compactMode, setCompactMode] = useState(false);

  const themes = [
    {
      id: 'light',
      name: 'Light',
      icon: FaSun,
      description: 'Clean light theme',
    },
    {
      id: 'dark',
      name: 'Dark',
      icon: FaMoon,
      description: 'Default dark theme',
    },
    {
      id: 'auto',
      name: 'Auto',
      icon: FaDesktop,
      description: 'Follow system theme',
    },
  ];

  const fontSizes = [
    { id: 'small', name: 'Small', size: '14px' },
    { id: 'medium', name: 'Medium', size: '16px' },
    { id: 'large', name: 'Large', size: '18px' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
          <FaPalette className="text-purple-400" />
          <span>Appearance</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Customize how DashForge looks and feels
        </p>
      </div>

      {/* Theme Selection */}
      <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          <FaMoon className="text-gray-400" size={16} />
          <span>Theme Preferences</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {themes.map((themeOption) => {
            const Icon = themeOption.icon;
            const isActive = theme === themeOption.id;

            return (
              <button
                key={themeOption.id}
                onClick={() => setTheme(themeOption.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  isActive
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-600 hover:border-gray-500 hover:bg-gray-600/30'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div
                    className={`p-2 rounded-lg ${
                      isActive
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-600 text-gray-300'
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <span
                    className={`font-medium ${
                      isActive ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    {themeOption.name}
                  </span>
                </div>
                <p className="text-sm text-gray-400">
                  {themeOption.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Font Size */}
      <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          <FaEye className="text-gray-400" size={16} />
          <span>Display Settings</span>
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-4">
              Font Size
            </label>
            <div className="flex space-x-4">
              {fontSizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setFontSize(size.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    fontSize === size.id
                      ? 'border-blue-500 bg-blue-500/10 text-white'
                      : 'border-gray-600 text-gray-400 hover:border-gray-500'
                  }`}
                  style={{ fontSize: size.size }}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          {/* Compact Mode Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-600/20 rounded-lg">
            <div>
              <p className="text-white font-medium">Compact Mode</p>
              <p className="text-gray-400 text-sm">
                Reduce padding and spacing for more content
              </p>
            </div>
            <button
              onClick={() => setCompactMode(!compactMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                compactMode ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                  compactMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
          Reset to Defaults
        </button>
        <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center space-x-2">
          <FaSave size={14} />
          <span>Apply Changes</span>
        </button>
      </div>
    </div>
  );
}
