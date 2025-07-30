import React from 'react';

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Summary Cards */}
      <div className="col-span-1 bg-white p-4 rounded-xl shadow-sm text-center">
        <h2 className="text-sm text-gray-500">Total requests (24h)</h2>
        <p className="text-lg font-bold mt-2">No requests.</p>
      </div>
      <div className="col-span-1 bg-white p-4 rounded-xl shadow-sm text-center">
        <h2 className="text-sm text-gray-500">Top chain (reqs) (24h)</h2>
        <p className="text-lg font-bold mt-2">No requests.</p>
      </div>
      <div className="col-span-1 bg-white p-4 rounded-xl shadow-sm text-center">
        <h2 className="text-sm text-gray-500">Top project (reqs) (24h)</h2>
        <p className="text-lg font-bold mt-2">No requests.</p>
      </div>

      {/* Charging Model Section */}
      <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-xl shadow-sm">
        <h3 className="text-sm text-gray-600 mb-1">Charging model</h3>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">Freemium</span>
          <span className="text-gray-800 font-semibold text-sm">0 API Credits ≈ $0.00</span>
        </div>
        <div className="mt-3 bg-blue-50 p-3 rounded text-sm text-blue-800 flex justify-between items-center">
          <p>Get more: Ultimate number of blockchains, superior rate limits, x3 projects...</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-3 py-1 rounded">Get Premium</button>
        </div>
      </div>

      {/* Docs Section */}
      <div className="col-span-1 bg-white p-4 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-2">Docs</h3>
        <ul className="space-y-2 text-sm text-blue-600">
          <li><a href="#">Getting started</a></li>
          <li><a href="#">Service plans</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Supported chains</a></li>
        </ul>
      </div>

      {/* Products and Plans Section */}
      <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-white to-blue-50 p-5 rounded-xl shadow-sm">
        <h3 className="font-semibold text-lg mb-3">Premium</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>Node API: 1.5k reqs/sec</li>
            <li>Advanced API: 1k reqs/min</li>
            <li>80+ blockchains</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>Team accounts</li>
            <li>Support portal</li>
            <li>Multi-project stats</li>
          </ul>
        </div>
      </div>

      {/* Socials Section */}
      <div className="col-span-1 bg-white p-4 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-2">Socials</h3>
        <ul className="space-y-2 text-sm text-blue-600">
          <li><a href="#">X (Twitter)</a></li>
          <li><a href="#">Telegram</a></li>
          <li><a href="#">Reddit</a></li>
          <li><a href="#">Discord</a></li>
          <li><a href="#">Substack</a></li>
        </ul>
      </div>
    </div>
  );
};

export { HomePage };
