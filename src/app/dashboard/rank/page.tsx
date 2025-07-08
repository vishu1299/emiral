"use client";

import type React from "react";
import {
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useState } from "react";

const RankContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const rankData = [
    {
      level: 1,
      rank: "Bronze",
      icon: "🥉",
      groupPoints: 2000,
      personalPoints: 360,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
    },
    {
      level: 2,
      rank: "Silver",
      icon: "🥈",
      groupPoints: 5000,
      personalPoints: 1560,
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-700",
    },
    {
      level: 3,
      rank: "Gold",
      icon: "🥇",
      groupPoints: 12000,
      personalPoints: 4260,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-700",
    },
  ];

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="space-y-8">
      {/* Rank Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Rank System
            </h1>
            <p className="text-gray-600">
              Track your progress and unlock new ranks by earning points.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              <FiAward className="w-6 h-6 text-[#29c231]" />
              <span className="text-lg font-semibold text-gray-900">
                Current: Starter
              </span>
            </div>
          </div>
        </div>

        {/* Current Points Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FiUsers className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Group Points
              </h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">0.00</p>
            <p className="text-sm text-gray-600 mt-1">
              Points earned from your team
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <FiUser className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Personal Points
              </h3>
            </div>
            <p className="text-3xl font-bold text-green-600">0.00</p>
            <p className="text-sm text-gray-600 mt-1">
              Points earned individually
            </p>
          </div>
        </div>
      </div>

      {/* Rank Progression Cards */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Ranks</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FiTrendingUp className="w-4 h-4" />
            <span>Progress to next level</span>
          </div>
        </div>

        <div className="grid gap-6">
          {rankData.map((rank, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-4 rounded-full ${rank.bgColor} ${rank.borderColor} border-2`}
                    >
                      <span className="text-3xl">{rank.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                          Level {rank.level}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        Upcoming Rank: {rank.rank}
                      </h3>
                      <div className="flex items-center gap-1">
                        <div className="w-full bg-gray-200 rounded-full h-2 max-w-xs">
                          <div
                            className={`bg-gradient-to-r ${rank.color} h-2 rounded-full transition-all duration-300`}
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">0%</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-100">
                      <p className="text-sm text-gray-600 mb-2">
                        Points needed to reach next rank:
                      </p>
                      <div className="space-y-1">
                        <p className="text-lg font-bold text-orange-600">
                          {rank.groupPoints.toLocaleString()}{" "}
                          <span className="text-sm font-normal">
                            Group Points
                          </span>
                        </p>
                        <p className="text-lg font-bold text-yellow-600">
                          {rank.personalPoints.toLocaleString()}{" "}
                          <span className="text-sm font-normal">
                            Personal Points
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <FiChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                currentPage === page
                  ? "bg-[#29c231] text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Rank Benefits */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Rank Benefits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🥉</span>
              <h4 className="font-semibold text-gray-900">Bronze</h4>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 5% commission bonus</li>
              <li>• Priority support</li>
              <li>• Monthly rewards</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🥈</span>
              <h4 className="font-semibold text-gray-900">Silver</h4>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 10% commission bonus</li>
              <li>• VIP support</li>
              <li>• Exclusive events</li>
            </ul>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🥇</span>
              <h4 className="font-semibold text-gray-900">Gold</h4>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 15% commission bonus</li>
              <li>• Dedicated manager</li>
              <li>• Premium benefits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankContent;
