"use client";

import type React from "react";
import {
  FiGift,
  FiClock,
  FiDollarSign,
  FiStar,
  FiCheck,
  FiInfo,
} from "react-icons/fi";
// import { useState } from "react";

const RedeemContent: React.FC = () => {
  const redeemOffers = [
    {
      id: 1,
      offer: "Travel",
      emiralPoints: 79200,
      rewardWorth: 1500,
      duration: "2 month",
      category: "experience",
      description: "Luxury travel package with accommodation and flights",

      popular: false,
    },
    {
      id: 2,
      offer: "Car",
      emiralPoints: 168000,
      rewardWorth: 4500,
      duration: "6 month",
      category: "vehicle",
      description: "Premium car rental or purchase assistance",

      popular: true,
    },
    {
      id: 3,
      offer: "BRONZE",
      emiralPoints: 2360,
      rewardWorth: 33,
      duration: "1",
      category: "tier",
      description: "Bronze tier rewards and benefits",

      popular: false,
    },
    {
      id: 4,
      offer: "SILVER",
      emiralPoints: 6200,
      rewardWorth: 133,
      duration: "1",
      category: "tier",
      description: "Silver tier rewards and enhanced benefits",
      popular: false,
    },
    {
      id: 5,
      offer: "GOLD",
      emiralPoints: 14700,
      rewardWorth: 400,
      duration: "1",
      category: "tier",
      description: "Gold tier rewards with premium benefits",
      popular: false,
    },
  ];

  const currentPoints = 15000; // This would come from user data

  const handleRedeem = (offerId: number, requiredPoints: number) => {
    if (currentPoints >= requiredPoints) {
      console.log(`Redeeming offer ${offerId}`);
      // Add redemption logic here
    } else {
      alert("Insufficient Emiral Points!");
    }
  };

  const canRedeem = (requiredPoints: number) => currentPoints >= requiredPoints;

  return (
    <div className="space-y-8">
      {/* Redeem Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Redeem Emiral Points
            </h1>
            <p className="text-gray-600">
              Exchange your Emiral Points for amazing rewards and benefits.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-r from-[#29c231] to-green-600 text-white px-6 py-3 rounded-lg">
              <div className="flex items-center gap-2">
                <FiStar className="w-5 h-5" />
                <div>
                  <p className="text-sm opacity-90">Available Points</p>
                  <p className="text-xl font-bold">
                    {currentPoints.toLocaleString()} EP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FiGift className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Offers</p>
                <p className="text-xl font-bold text-gray-900">
                  {redeemOffers.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border border-green-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <FiCheck className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Available to Redeem</p>
                <p className="text-xl font-bold text-gray-900">
                  {
                    redeemOffers.filter((offer) =>
                      canRedeem(offer.emiralPoints)
                    ).length
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <FiDollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Value</p>
                <p className="text-xl font-bold text-gray-900">
                  $
                  {redeemOffers
                    .reduce((sum, offer) => sum + offer.rewardWorth, 0)
                    .toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Redemption Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            Available Rewards
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-700">
                  Offer
                </th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">
                  Emiral Points
                </th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">
                  Reward Worth
                </th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">
                  Duration
                </th>
                <th className="text-left py-4 px-6 font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {redeemOffers.map((offer) => (
                <tr
                  key={offer.id}
                  className={`hover:bg-gray-50 transition-colors duration-200 ${
                    !canRedeem(offer.emiralPoints) ? "opacity-60" : ""
                  }`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">
                            {offer.offer}
                          </span>
                          {offer.popular && (
                            <span className="bg-[#29c231] text-white text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {offer.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <FiStar className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold text-gray-900">
                        {offer.emiralPoints.toLocaleString()} EP
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <FiDollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-green-600">
                        {offer.rewardWorth} USD
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <FiClock className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{offer.duration}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleRedeem(offer.id, offer.emiralPoints)}
                      disabled={!canRedeem(offer.emiralPoints)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        canRedeem(offer.emiralPoints)
                          ? "bg-[#29c231] text-white hover:bg-green-600"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {canRedeem(offer.emiralPoints)
                        ? "Redeem"
                        : "Insufficient Points"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Redemption Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FiInfo className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Redemption Information
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                • Points are deducted immediately upon successful redemption
              </p>
              <p>• Rewards are processed within 24-48 hours</p>
              <p>• Duration indicates the validity period of the reward</p>
              <p>• Some rewards may have additional terms and conditions</p>
              <p>• Contact support for any redemption-related queries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Points Earning Tips */}
      <div className="bg-gradient-to-r from-[#29c231] to-green-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">Need More Points?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Daily Activities</h4>
            <p className="text-sm opacity-90">
              Complete daily tasks to earn bonus points
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Referrals</h4>
            <p className="text-sm opacity-90">
              Invite friends and earn points for each referral
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Purchases</h4>
            <p className="text-sm opacity-90">
              Earn points with every purchase you make
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemContent;
