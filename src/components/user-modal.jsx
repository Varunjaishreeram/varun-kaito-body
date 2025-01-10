import React from 'react';
import { X } from 'lucide-react';
import { BarChart } from './bar-chart';

const UserModal = ({ user, onClose }) => {
  const timeframes = ['Current', '7D', '1M', '3M', '6M', '1Y'];
  const metrics = {
    'Current': { mindshare: '1.69%', bps: '-', percentage: '-' },
    '7D': { mindshare: '1.51%', bps: '18', percentage: '12.00%' },
    '1M': { mindshare: '1.04%', bps: '66', percentage: '63.38%' },
    '3M': { mindshare: '0.75%', bps: '95', percentage: '126.87%' },
    '6M': { mindshare: '0.80%', bps: '90', percentage: '112.64%' },
    '1Y': { mindshare: '0.76%', bps: '93', percentage: '122.02%' }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#1a1a1a] rounded-lg w-[600px] max-h-[90vh]">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="text-base font-semibold text-white">{user.name}</h2>
                <div className="text-sm text-gray-400">
                  {user.handle} · 5956 Smart Followers
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            <div className="text-xs text-gray-400">Metrics</div>
            {timeframes.map(time => (
              <div key={time} className="text-xs text-gray-400">{time}</div>
            ))}
          </div>

          <div className="space-y-2">
            {Object.entries(metrics['Current']).map(([metric]) => (
              <div key={metric} className="grid grid-cols-7 gap-2">
                <div className="text-xs text-gray-400 capitalize">{metric}</div>
                {timeframes.map(time => (
                  <div key={time} className="text-xs text-white">
                    {metrics[time][metric] !== '-' && metric === 'bps' && (
                      <span className="text-[#00ffa3]">↑</span>
                    )}
                    {metrics[time][metric]}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm text-white">Mindshare over time (L12M)</h3>
              <div className="text-xs text-gray-400">Intervals (1W)</div>
            </div>
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
