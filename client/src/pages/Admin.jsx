// Description: This file contains the Admin component which serves as the dashboard for administrators. It displays various statistics, recent activities, and quick action buttons.import React from "react";
import React from "react";
import { FaUsers, FaFileAlt, FaChartBar, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminCard = ({ icon: Icon, title, value, description, trend }) => (
  <div className=" rounded-lg shadow-sm p-6 border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm  mb-1">{title}</p>
        <h3 className="text-2xl font-bold mb-1">{value}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="rounded-full p-3 bg-primary-50">
        <Icon className="h-6 w-6 text-primary-500" />
      </div>
    </div>
    {trend && (
      <div className="mt-4 flex items-center text-sm">
        <span
          className={`font-medium ${
            trend.isPositive ? "text-primary-500" : "text-red-600"
          }`}
        >
          {trend.value}
        </span>
        <span className=" ml-2">{trend.text}</span>
      </div>
    )}
  </div>
);

const RecentActivityItem = ({ title, time, status, type }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center">
      <div
        className={`w-2 h-2 rounded-full ${
          status === "completed"
            ? "bg-green-500"
            : status === "pending"
            ? "bg-yellow-500"
            : "bg-red-500"
        }`}
      />
      <div className="ml-3">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
    <span
      className={`px-2 py-1 text-xs rounded-full ${
        type === "user"
          ? "bg-blue-100 text-blue-800"
          : type === "order"
          ? "bg-green-100 text-green-800"
          : "bg-purple-100 text-purple-800"
      }`}
    >
      {type}
    </span>
  </div>
);

const Admin = () => {
  return (
    <div className="min-h-screen bg-primary-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold ">Admin Dashboard</h1>
        <p className="">Welcome back, Administrator</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AdminCard
          icon={FaUsers}
          title="Total Users"
          value="2,543"
          description="Active users"
          trend={{ isPositive: true, value: "+12%", text: "vs last month" }}
        />
        <AdminCard
          icon={FaFileAlt}
          title="Total Orders"
          value="1,234"
          description="Current month"
          trend={{ isPositive: true, value: "+23%", text: "vs last month" }}
        />
        <AdminCard
          icon={FaChartBar}
          title="Revenue"
          value="$45,234"
          description="Current month"
          trend={{ isPositive: false, value: "-8%", text: "vs last month" }}
        />
        <AdminCard
          icon={FaCalendarAlt}
          title="Pending Tasks"
          value="15"
          description="Requires attention"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2  rounded-lg shadow-sm p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <button className="text-sm text-primary-500 hover:text-primary-600">
              View All
            </button>
          </div>
          <div className="divide-y divide-gray-100">
            <RecentActivityItem
              title="New user registration"
              time="2 minutes ago"
              status="completed"
              type="user"
            />
            <RecentActivityItem
              title="Order #12345 placed"
              time="1 hour ago"
              status="pending"
              type="order"
            />
            <RecentActivityItem
              title="Payment processing"
              time="3 hours ago"
              status="failed"
              type="payment"
            />
            <RecentActivityItem
              title="New product added"
              time="5 hours ago"
              status="completed"
              type="product"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className=" rounded-lg shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <Link to="/admin/users" className="block">
              <button className="w-full btn text-left flex items-center space-x-3">
                <div className="flex flex-1 space-x-1 justify-center align-middle">
                  <FaUsers className="h-5 w-5" />
                  <span>Manage Users</span>
                </div>
              </button>
            </Link>
            <Link to="/admin/orders" className="block">
              <button className="w-full btn text-left flex items-center space-x-3">
                <div className="flex flex-1 space-x-1 justify-center align-middle ">
                  <FaFileAlt className="h-5 w-5" />
                  <span>View Orders</span>
                </div>
              </button>
            </Link>
            <Link to="/admin/analytics" className="block">
              <button className="w-full btn text-left flex items-center space-x-3">
                <div className="flex flex-1 space-x-1 justify-center align-middle">
                  <FaChartBar className="h-5 w-5" />
                  <span>Analytics</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
