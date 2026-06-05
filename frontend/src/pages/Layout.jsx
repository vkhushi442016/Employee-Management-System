import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8">
          {/* This is where your page content (Dashboard, Employees, etc.) will appear */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};
