import {
  FiDollarSign,
  FiDownload,
  FiUpload,
  FiList,
  FiGift,
  FiActivity,
  FiLayers,
  FiAward,
} from "react-icons/fi";

export default function DashboardContent() {
  const dashboardStats = [
    {
      title: "Current Balance",
      value: "$0.00",
      icon: FiDollarSign,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Deposit",
      value: "$0.00",
      icon: FiDownload,
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      title: "Withdraw",
      value: "$0.00",
      icon: FiUpload,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Total Transactions",
      value: "0",
      icon: FiList,
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: "Emiral Points",
      value: "0.00 EP",
      icon: FiGift,
      color: "bg-pink-500",
      lightColor: "bg-pink-50",
      textColor: "text-pink-600",
    },
    {
      title: "Total Commission",
      value: "$0.00",
      icon: FiActivity,
      color: "bg-teal-500",
      lightColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
    {
      title: "My Plan",
      value: "N/A",
      icon: FiLayers,
      color: "bg-cyan-500",
      lightColor: "bg-cyan-50",
      textColor: "text-cyan-600",
    },
    {
      title: "Rank",
      value: "N/A",
      icon: FiAward,
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
  ];

  return (
    <div className="w-full ">
      <div className="space-y-8">
        {/* Dashboard Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back! Heres whats happening with your account.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-50 rounded-lg px-4 py-2 text-sm text-gray-600 font-mono">
                https://emiratglobal.com?reference=madubrit01
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.lightColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Transactions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">
              Latest Transactions
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">
                    Date
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">
                    TRX
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">
                    Amount
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">
                    Charge
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">
                    Post Balance
                  </th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="text-center py-12 text-gray-500">
                    <div className="flex flex-col items-center">
                      <FiList className="w-12 h-12 text-gray-300 mb-3" />
                      <p className="text-lg font-medium">
                        No transactions found
                      </p>
                      <p className="text-sm">
                        Your transaction history will appear here
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
