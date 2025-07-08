"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiEdit,
  FiTrendingUp,
  FiBarChart,
  FiShoppingBag,
  FiRefreshCw,
  FiCalendar,
  FiCreditCard,
  FiUsers,
  FiUser,
  FiShoppingCart,
  FiChevronDown,
  FiChevronUp,
  FiDownload,
  FiList,
  FiSettings,
  FiLogOut,
  FiUserPlus,
  FiGift,
  FiActivity,
} from "react-icons/fi";
import { FaTruckLoading } from "react-icons/fa";

interface DropdownState {
  withdraw: boolean;
  referrals: boolean;
  account: boolean;
}

export default function Sidebar() {
  const pathname = usePathname();
  const [dropdowns, setDropdowns] = useState<DropdownState>({
    withdraw: false,
    referrals: false,
    account: false,
  });

  const toggleDropdown = (key: keyof DropdownState) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className="space-y-8">
      {/* User Profile Header */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative">
          <div className="bg-[#29c231] h-24"></div>
          <div className="flex flex-col items-center -mt-12 pb-4 px-4">
            <div className="rounded-full overflow-hidden border-4 border-white w-24 h-24">
              <Image
                src="/profile.png"
                width={120}
                height={120}
                alt="Alex Coal"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mt-2 text-center">Alex Coal</h2>
            <p className="text-gray-500 text-sm text-center">
              Member since Jan 2024
            </p>
            <button className="mt-3 flex items-center gap-1 text-[#29c231] border border-[#29c231] rounded-full px-4 py-1 text-sm hover:bg-[#29c231] hover:text-white transition-all duration-200">
              <FiEdit className="w-4 h-4" /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="relative group">
        <div className="absolute inset-0 rounded-2xl blur-xl"></div>
        <div className="relative backdrop-blur-xl bg-white border border-white/30 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-2 space-y-1">
            {/* Dashboard */}
            <Link
              href="/"
              className={`group flex items-center gap-3 p-3 rounded-xl text-gray-700 transition-all duration-200 ${
                isActive("/")
                  ? "bg-gradient-to-r from-[#29c231]/20 to-green-400/20 text-[#29c231] border-l-4 border-[#29c231]"
                  : "hover:bg-white/20"
              }`}
            >
              <FiBarChart
                className={`w-5 h-5 ${
                  isActive("/") ? "text-[#29c231]" : "text-black"
                }`}
              />
              <span
                className={`hidden sm:inline font-medium ${
                  isActive("/") ? "text-[#29c231]" : ""
                }`}
              >
                Dashboard
              </span>
            </Link>

            {/* Rank */}
            <Link
              href="/dashboard/rank"
              className={`group flex items-center gap-3 p-3 rounded-xl text-gray-700 transition-all duration-200 ${
                isActive("/dashboard/rank")
                  ? "bg-gradient-to-r from-[#29c231]/20 to-green-400/20 text-[#29c231] border-l-4 border-[#29c231]"
                  : "hover:bg-white/20"
              }`}
            >
              <FiTrendingUp
                className={`w-5 h-5 ${
                  isActive("/dashboard/rank") ? "text-[#29c231]" : "text-black"
                }`}
              />
              <span
                className={`hidden sm:inline ${
                  isActive("/dashboard/rank")
                    ? "text-[#29c231] font-medium"
                    : ""
                }`}
              >
                Rank
              </span>
            </Link>

            {/* Shop */}
            <Link
              href="/dashboard/shop"
              className={`group flex items-center gap-3 p-3 rounded-xl text-gray-700 transition-all duration-200 ${
                isActive("/dashboard/shop")
                  ? "bg-gradient-to-r from-[#29c231]/20 to-green-400/20 text-[#29c231] border-l-4 border-[#29c231]"
                  : "hover:bg-white/20"
              }`}
            >
              <FiShoppingBag
                className={`w-5 h-5 ${
                  isActive("/dashboard/shop") ? "text-[#29c231]" : "text-black"
                }`}
              />
              <span
                className={`hidden sm:inline ${
                  isActive("/dashboard/shop")
                    ? "text-[#29c231] font-medium"
                    : ""
                }`}
              >
                Shop
              </span>
            </Link>

            {/* Withdraw Dropdown */}
            <div className="space-y-1">
              <div
                className="group flex items-center justify-between gap-3 p-3 rounded-xl text-gray-700 hover:bg-white/20 transition-all duration-200 cursor-pointer"
                onClick={() => toggleDropdown("withdraw")}
              >
                <div className="flex items-center gap-3">
                  <FiRefreshCw className="w-5 h-5 text-black" />
                  <span className="hidden sm:inline">Withdraw</span>
                </div>
                {dropdowns.withdraw ? (
                  <FiChevronUp className="w-4 h-4" />
                ) : (
                  <FiChevronDown className="w-4 h-4" />
                )}
              </div>
              {dropdowns.withdraw && (
                <div className="ml-8 space-y-1">
                  <Link
                    href="/dashboard/withdraw/redeem"
                    className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-[#29c231] transition-colors"
                  >
                    <FiDownload className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      Redeem Emiral Points
                    </span>
                  </Link>
                  <Link
                    href="/dashboard/withdraw/money"
                    className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-[#29c231] transition-colors"
                  >
                    <FiList className="w-4 h-4" />
                    <span className="hidden sm:inline">Withdrawal Money</span>
                  </Link>
                  <Link
                    href="/dashboard/withdraw/history"
                    className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-[#29c231] transition-colors"
                  >
                    <FiSettings className="w-4 h-4" />
                    <span className="hidden sm:inline">Withdrawal History</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Plan */}
            <Link
              href="/dashboard/plan"
              className={`group flex items-center gap-3 p-3 rounded-xl text-gray-700 transition-all duration-200 ${
                isActive("/dashboard/plan")
                  ? "bg-gradient-to-r from-[#29c231]/20 to-green-400/20 text-[#29c231] border-l-4 border-[#29c231]"
                  : "hover:bg-white/20"
              }`}
            >
              <FiCalendar
                className={`w-5 h-5 ${
                  isActive("/dashboard/plan") ? "text-[#29c231]" : "text-black"
                }`}
              />
              <span
                className={`hidden sm:inline ${
                  isActive("/dashboard/plan")
                    ? "text-[#29c231] font-medium"
                    : ""
                }`}
              >
                Plan
              </span>
            </Link>

            {/* Transactions */}
            <Link
              href="/dashboard/transactions"
              className={`group flex items-center gap-3 p-3 rounded-xl text-gray-700 transition-all duration-200 ${
                isActive("/dashboard/transactions")
                  ? "bg-gradient-to-r from-[#29c231]/20 to-green-400/20 text-[#29c231] border-l-4 border-[#29c231]"
                  : "hover:bg-white/20"
              }`}
            >
              <FiCreditCard
                className={`w-5 h-5 ${
                  isActive("/dashboard/transactions")
                    ? "text-[#29c231]"
                    : "text-black"
                }`}
              />
              <span
                className={`hidden sm:inline ${
                  isActive("/dashboard/transactions")
                    ? "text-[#29c231] font-medium"
                    : ""
                }`}
              >
                Transactions
              </span>
            </Link>

            {/* Referrals Dropdown */}
            <div className="space-y-1">
              <div
                className="group flex items-center justify-between gap-3 p-3 rounded-xl text-gray-700 hover:bg-white/20 transition-all duration-200 cursor-pointer"
                onClick={() => toggleDropdown("referrals")}
              >
                <div className="flex items-center gap-3">
                  <FiUsers className="w-5 h-5 text-black" />
                  <span className="hidden sm:inline">Referrals</span>
                </div>
                {dropdowns.referrals ? (
                  <FiChevronUp className="w-4 h-4" />
                ) : (
                  <FiChevronDown className="w-4 h-4" />
                )}
              </div>
              {dropdowns.referrals && (
                <div className="ml-8 space-y-1">
                  <Link
                    href="/dashboard/referrals/invite"
                    className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-[#29c231] transition-colors"
                  >
                    <FiUserPlus className="w-4 h-4" />
                    <span className="hidden sm:inline">Invite Friends</span>
                  </Link>
                  <Link
                    href="/dashboard/referrals/rewards"
                    className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-[#29c231] transition-colors"
                  >
                    <FiGift className="w-4 h-4" />
                    <span className="hidden sm:inline">Referral Rewards</span>
                  </Link>
                  <Link
                    href="/dashboard/referrals/statistics"
                    className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-[#29c231] transition-colors"
                  >
                    <FiActivity className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      Referral Statistics
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Account Dropdown */}
            <div className="space-y-1">
              <div
                className="group flex items-center justify-between gap-3 p-3 rounded-xl text-gray-700 hover:bg-white/20 transition-all duration-200 cursor-pointer"
                onClick={() => toggleDropdown("account")}
              >
                <div className="flex items-center gap-3">
                  <FiUser className="w-5 h-5 text-black" />
                  <span className="hidden sm:inline">Account</span>
                </div>
                {dropdowns.account ? (
                  <FiChevronUp className="w-4 h-4" />
                ) : (
                  <FiChevronDown className="w-4 h-4" />
                )}
              </div>
              {dropdowns.account && (
                <div className="ml-8 space-y-1">
                  <Link
                    href="/dashboard/account/profile"
                    className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-[#29c231] transition-colors"
                  >
                    <FiEdit className="w-4 h-4" />
                    <span className="hidden sm:inline">Profile Settings</span>
                  </Link>
                  <Link
                    href="/dashboard/account/settings"
                    className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-[#29c231] transition-colors"
                  >
                    <FiSettings className="w-4 h-4" />
                    <span className="hidden sm:inline">Account Settings</span>
                  </Link>
                  <button className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:text-[#29c231] transition-colors w-full text-left">
                    <FiLogOut className="w-4 h-4" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </div>
              )}
            </div>

            {/* Orders */}
            <Link
              href="/dashboard/orders"
              className={`group flex items-center gap-3 p-3 rounded-xl text-gray-700 transition-all duration-200 ${
                isActive("/dashboard/orders")
                  ? "bg-gradient-to-r from-[#29c231]/20 to-green-400/20 text-[#29c231] border-l-4 border-[#29c231]"
                  : "hover:bg-white/20"
              }`}
            >
              <FaTruckLoading
                className={`w-5 h-5 ${
                  isActive("/dashboard/orders")
                    ? "text-[#29c231]"
                    : "text-black"
                }`}
              />
              <span
                className={`hidden sm:inline ${
                  isActive("/dashboard/orders")
                    ? "text-[#29c231] font-medium"
                    : ""
                }`}
              >
                Orders
              </span>
            </Link>

            {/* Cart */}
            <Link
              href="/dashboard/cart"
              className={`group flex items-center gap-3 p-3 rounded-xl text-gray-700 transition-all duration-200 ${
                isActive("/dashboard/cart")
                  ? "bg-gradient-to-r from-[#29c231]/20 to-green-400/20 text-[#29c231] border-l-4 border-[#29c231]"
                  : "hover:bg-white/20"
              }`}
            >
              <FiShoppingCart
                className={`w-5 h-5 ${
                  isActive("/dashboard/cart") ? "text-[#29c231]" : "text-black"
                }`}
              />
              <span
                className={`hidden sm:inline ${
                  isActive("/dashboard/cart")
                    ? "text-[#29c231] font-medium"
                    : ""
                }`}
              >
                Cart
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
