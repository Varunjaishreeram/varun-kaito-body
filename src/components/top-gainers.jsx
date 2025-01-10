import React, { useState } from "react";
import { Info } from "lucide-react";
import UserModal from "./user-modal";

const TopGainers = () => {
  const [activeButton, setActiveButton] = useState("absolute");
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "jesse.base.eth",
      handle: "@jesse...",
      avatar: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img%252F18876842.jpg%253F1736530200000/w=48&q=90",
      metrics: {
        "current": "1.6%",
        "7D": "66",
        "30D": "66",
        "3M": "95",
        "6M": "90",
      },
    },
    {
      id: 2,
      name: "paulgrewal",
      handle: "@iampau...",
      avatar: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img%252F295218901.jpg%253F1736530200000/w=48&q=90",
      metrics: {
        "current": "1.6%",
        "7D": "66",
        "30D": "59",
        "3M": "47",
        "6M": "57",
      },
    },
    {
      id: 3,
      name: "apple",
      handle: "@iampau...",
      avatar: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img%252F14101591.jpg%253F1736530200000/w=48&q=90",
      metrics: {
        "current": "1.6%",
        "7D": "66",
        "30D": "59",
        "3M": "47",
        "6M": "57",
      },
    }, {
      id: 4,
      name: "paulgrewal",
      handle: "@iampau...",
      avatar: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img%252F1426732252768182281.jpg%253F1736530200000/w=48&q=90",
      metrics: {
        "current": "1.6%",
        "7D": "66",
        "30D": "59",
        "3M": "47",
        "6M": "57",
      },
    },
    {
      id: 1,
      name: "jesse.base.eth",
      handle: "@jesse...",
      avatar: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img%252F18876842.jpg%253F1736530200000/w=48&q=90",
      metrics: {
        "current": "1.6%",
        "7D": "66",
        "30D": "66",
        "3M": "95",
        "6M": "90",
      },
    },
    {
      id: 2,
      name: "paulgrewal",
      handle: "@iampau...",
      avatar: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img%252F295218901.jpg%253F1736530200000/w=48&q=90",
      metrics: {
        "current": "1.6%",
        "7D": "66",
        "30D": "59",
        "3M": "47",
        "6M": "57",
      },
    },
    {
      id: 3,
      name: "apple",
      handle: "@iampau...",
      avatar: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img%252F14101591.jpg%253F1736530200000/w=48&q=90",
      metrics: {
        "current": "1.6%",
        "7D": "66",
        "30D": "59",
        "3M": "47",
        "6M": "57",
      },
    }, {
      id: 4,
      name: "paulgrewal",
      handle: "@iampau...",
      avatar: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img%252F1426732252768182281.jpg%253F1736530200000/w=48&q=90",
      metrics: {
        "current": "1.6%",
        "7D": "66",
        "30D": "59",
        "3M": "47",
        "6M": "57",
      },
    },{
      id: 3,
      name: "apple",
      handle: "@iampau...",
      avatar: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img%252F14101591.jpg%253F1736530200000/w=48&q=90",
      metrics: {
        "current": "1.6%",
        "7D": "66",
        "30D": "59",
        "3M": "47",
        "6M": "57",
      },
    }, {
      id: 4,
      name: "paulgrewal",
      handle: "@iampau...",
      avatar: "https://img.kaito.ai/v1/https%253A%252F%252Fkaito-public-assets.s3.us-west-2.amazonaws.com%252Ftwitter-user-profile-img%252F1426732252768182281.jpg%253F1736530200000/w=48&q=90",
      metrics: {
        "current": "1.6%",
        "7D": "66",
        "30D": "59",
        "3M": "47",
        "6M": "57",
      },
    }
    
  ];


  return (
    <div className="w-[433px]">
      <div className="bg-[#27292c] text-white p-6 rounded-lg">
        <div className="flex items-center gap-5 mb-6">
          <h2 className="text-base font-semibold">Top Gainer</h2>
          <div className="flex gap-2">
            <div className="outline-black bg-[#44474a] flex gap-2 rounded p-[2.5px] justify-center">
            <button
        className={`text-sm ${
          activeButton === "absolute" ? "text-[#32FFDC] bg-[#102622]" : ""
        }`}
        onClick={() => setActiveButton("absolute")}
      >
        Absolute (bps)
      </button>
      <button
        className={`text-sm ${
          activeButton === "relative" ? "text-[#32FFDC] bg-[#102622]" : ""
        }`}
        onClick={() => setActiveButton("relative")}
      >
        Relative (%)
      </button>
            </div>
          </div>
          <Info className="text-gray-400" size={16} />
        </div>

        {/* Combined scrollable table */}
        <div className="overflow-x-auto scrollbar-custom">
          <div className="min-w-[600px]">
            {/* Header Row */}
            <div className="grid grid-cols-[1.4fr,0.7fr,0.7fr,0.7fr,0.7fr,0.7fr]">
              <div className="text-gray-400">Name</div>
              <div className="text-gray-400 text-center">Current</div>
              <div className="text-gray-400 text-center">Δ7D</div>
              <div className="text-gray-400 text-center">Δ30D</div>
              <div className="text-gray-400 text-center">Δ3M</div>
              <div className="text-gray-400 text-center">Δ6M</div>
            </div>

            {/* Data Rows */}
            {users.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-[1.4fr,0.7fr,0.7fr,0.7fr,0.7fr,0.7fr] py-2 hover:bg-[#2a2a2a] cursor-pointer rounded"
                onClick={() => setSelectedUser(user)}
              >
                {/* Name Column */}
                <div className="flex items-center gap-2">
                  <img src={user.avatar} alt="" className="w-4 h-4 rounded-full" />
                  <div className="flex gap-1">
                    <div className="text-sm">{user.name}</div>
                    <div className="text-gray-400 text-sm">{user.handle}</div>
                  </div>
                </div>
                {/* Metric Columns */}
                {Object.entries(user.metrics).map(([period, value]) => (
                  <div key={period} className="text-center">
                    {period === "current" ? (
                      <div className="text-sm">{value}</div>
                    ) : (
                      <div className="text-sm text-[#16D38E]">▲{value}</div>
                    )}
                  </div>
                ))}

              </div>
            ))}
          </div>
        </div>

        {selectedUser && <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} small />}
      </div>

      {/* Custom CSS for scroll */}
      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          height: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #44474a;
          border-radius: 5px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #2a2a2a;
        }
        .scrollbar-custom {
          scrollbar-width: thin;
          scrollbar-color: #44474a #2a2a2a;
        }
      `}</style>
    </div>
  );
};

export default TopGainers;



