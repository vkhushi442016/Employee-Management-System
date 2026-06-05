import React from 'react';
import {
    Users,
    Calendar,
    Clock,
    Settings,
    LogOut,
    Bell,
    LayoutDashboard,
    ClipboardList
} from 'lucide-react';

// Helper Components to keep code clean
import { Link, useLocation } from 'react-router-dom';

function Dashboard() {

    const user = JSON.parse(
        localStorage.getItem('user')
    );

    return (

        <div className="flex min-h-screen bg-slate-50">

            {/* Sidebar - Professional Navy/Dark Sidebar */}
            <aside className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex">
                <div className="p-6">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">E</div>
                        EMS Portal
                    </h1>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {/* Correct way: pass 'to' as a prop to NavItem */}
                    <NavItem
                        icon={<LayoutDashboard size={20} />}
                        label="Overview"
                        to="/dashboard"
                        active
                    />

                    <NavItem
                        icon={<Users size={20} />}
                        label="Employees"
                        to="/employees"
                    />

                    <NavItem
                        icon={<Calendar size={20} />}
                        label="Attendance"
                        to="/attendance"
                    />

                    <NavItem
                        icon={<ClipboardList size={20} />}
                        label="Tasks"
                        to="/tasks"
                    />

                    <NavItem
                        icon={<Settings size={20} />}
                        label="Settings"
                        to="/settings"
                    />
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors w-full px-4 py-2">
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto">

                {/* Header/Navbar */}
                <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8">
                    <div className="flex items-center gap-2">
                        <span className="text-slate-500">Pages /</span>
                        <span className="font-medium text-slate-800">Dashboard</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="h-8 w-px bg-slate-200 mx-2"></div>
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="text-sm font-semibold text-slate-800 leading-tight">{user?.name || "Employee Name"}</p>
                                <p className="text-xs text-slate-500 capitalize">{user?.role || "Staff"}</p>
                            </div>
                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                                {user?.name?.[0] || "U"}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-8">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800">System Overview</h2>
                        <p className="text-slate-500">Welcome back! Here is what's happening today.</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard title="Total Employees" value="1,248" icon={<Users className="text-blue-600" />} change="+12% this month" />
                        <StatCard title="Active Projects" value="45" icon={<ClipboardList className="text-purple-600" />} change="3 due today" />
                        <StatCard title="On Leave" value="12" icon={<Clock className="text-orange-600" />} change="4 pending approval" />
                        <StatCard title="Performance" value="94%" icon={<LayoutDashboard className="text-green-600" />} change="Avg. Team Score" />
                    </div>

                    {/* Main Grid: Latest Updates & Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6 min-h-[300px]">
                            <h3 className="font-bold text-slate-800 mb-4">Recent Employee Activities</h3>
                            <div className="flex items-center justify-center h-full text-slate-400">
                                {/* Table or Chart component would go here */}
                                Table/Chart Placeholder
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                            <h3 className="font-bold text-slate-800 mb-4">Quick Links</h3>
                            <div className="space-y-3">
                                <QuickLink label="Request Leave" />
                                <QuickLink label="Update Timesheet" />
                                <QuickLink label="Company Directory" />
                                <QuickLink label="Benefit Details" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}




const NavItem = ({ icon, label, to }) => {
    const location = useLocation();
    // Check if this item is the current active route
    const isActive = location.pathname === to;

    return (
        <Link to={to} className="block no-underline">
            <button
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
            >
                {icon}
                <span className="font-medium text-sm">{label}</span>
            </button>
        </Link>
    );
};


const StatCard = ({ title, value, icon, change }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
        </div>
        <p className="text-slate-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
        <p className="text-xs mt-2 text-slate-400">{change}</p>
    </div>
);

const QuickLink = ({ label }) => (
    <button className="w-full text-left px-4 py-3 border border-slate-100 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-all">
        {label}
    </button>
);

export default Dashboard;