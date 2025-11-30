import { useState } from 'react';
import {
  FaKey,
  FaCode,
  FaCopy,
  FaEye,
  FaEyeSlash,
  FaTrash,
  FaPlus,
} from 'react-icons/fa';

export default function DevSettings() {
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: 'Production API',
      key: 'sk_live_...abcd',
      created: '2024-01-15',
      lastUsed: '2 hours ago',
    },
    {
      id: 2,
      name: 'Development',
      key: 'sk_test_...efgh',
      created: '2024-01-10',
      lastUsed: '1 week ago',
    },
  ]);
  const [showKey, setShowKey] = useState({});
  const [newKeyName, setNewKeyName] = useState('');

  const generateNewKey = () => {
    if (!newKeyName.trim()) return;

    const newKey = {
      id: Date.now(),
      name: newKeyName,
      key: `sk_${Math.random().toString(36).substr(2, 32)}`,
      created: new Date().toISOString().split('T')[0],
      lastUsed: 'Never',
    };

    setApiKeys((prev) => [newKey, ...prev]);
    setNewKeyName('');
  };

  const deleteKey = (id) => {
    setApiKeys((prev) => prev.filter((key) => key.id !== id));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
          <FaCode className="text-green-400" />
          <span>Developer Settings</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Manage API keys and developer resources
        </p>
      </div>

      {/* API Keys Section */}
      <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
            <FaKey className="text-gray-400" size={16} />
            <span>API Keys</span>
          </h3>

          {/* Generate New Key */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              placeholder="Key name"
              className="px-3 py-2 bg-gray-600/50 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={generateNewKey}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center space-x-2"
            >
              <FaPlus size={12} />
              <span>Generate</span>
            </button>
          </div>
        </div>

        {/* API Keys List */}
        <div className="space-y-4">
          {apiKeys.map((apiKey) => (
            <div
              key={apiKey.id}
              className="p-4 bg-gray-600/20 rounded-lg border border-gray-500/30"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-white font-medium">{apiKey.name}</h4>
                  <p className="text-gray-400 text-sm">
                    Created {apiKey.created} • Last used {apiKey.lastUsed}
                  </p>
                </div>
                <button
                  onClick={() => deleteKey(apiKey.id)}
                  className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors duration-300"
                >
                  <FaTrash size={14} />
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <code className="flex-1 px-3 py-2 bg-gray-700/50 rounded-lg text-gray-300 font-mono text-sm">
                  {showKey[apiKey.id]
                    ? apiKey.key
                    : '•'.repeat(apiKey.key.length)}
                </code>
                <button
                  onClick={() =>
                    setShowKey((prev) => ({
                      ...prev,
                      [apiKey.id]: !prev[apiKey.id],
                    }))
                  }
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-600/50 rounded-lg transition-colors duration-300"
                >
                  {showKey[apiKey.id] ? (
                    <FaEyeSlash size={14} />
                  ) : (
                    <FaEye size={14} />
                  )}
                </button>
                <button
                  onClick={() => copyToClipboard(apiKey.key)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-600/50 rounded-lg transition-colors duration-300"
                >
                  <FaCopy size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documentation Links */}
      <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
        <h3 className="text-lg font-semibold text-white mb-4">
          Developer Resources
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 bg-gray-600/20 rounded-lg border border-gray-500/30 hover:border-blue-500/50 transition-all duration-300 text-left group">
            <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
              API Documentation
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              Complete API reference and guides
            </p>
          </button>

          <button className="p-4 bg-gray-600/20 rounded-lg border border-gray-500/30 hover:border-green-500/50 transition-all duration-300 text-left group">
            <h4 className="text-white font-medium group-hover:text-green-400 transition-colors duration-300">
              Webhooks
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              Set up and manage webhook endpoints
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
