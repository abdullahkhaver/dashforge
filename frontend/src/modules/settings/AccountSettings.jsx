import { useState } from 'react';
import { FaUser, FaEnvelope,  FaSave, FaKey } from 'react-icons/fa';

export default function AccountSettings() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@dashforge.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Account settings updated:', formData);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
          <FaUser className="text-blue-400" />
          <span>Account Settings</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Manage your account information and security
        </p>
      </div>

      {/* Profile Information */}
      <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          <FaUser className="text-gray-400" size={16} />
          <span>Profile Information</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <div className="relative">
              <FaUser
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={14}
              />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-600/50 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={14}
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-600/50 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          {/* <FaShield className="text-gray-400" size={16} /> */}
          <span>Security Settings</span>
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Current Password
            </label>
            <div className="relative">
              <FaKey
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={14}
              />
              <input
                type="password"
                value={formData.currentPassword}
                onChange={(e) =>
                  handleChange('currentPassword', e.target.value)
                }
                className="w-full pl-10 pr-4 py-3 bg-gray-600/50 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter current password"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                New Password
              </label>
              <input
                type="password"
                value={formData.newPassword}
                onChange={(e) => handleChange('newPassword', e.target.value)}
                className="w-full px-4 py-3 bg-gray-600/50 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleChange('confirmPassword', e.target.value)
                }
                className="w-full px-4 py-3 bg-gray-600/50 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Confirm new password"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center space-x-2"
        >
          <FaSave size={14} />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
}
