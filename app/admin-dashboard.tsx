import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table } from '@/components/ui/table';
import { Chart } from '@/components/ui/chart';

const AdminDashboard = () => {
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}`, value: Math.floor(Math.random() * 100) }));
  const filteredData = data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
        <nav>
          <ul>
            <li><Button variant="ghost">Dashboard</Button></li>
            <li><Button variant="ghost">Settings</Button></li>
            <li><Button variant="ghost">Users</Button></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Overview</h1>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Total Users</h3>
            <p className="text-2xl">1,234</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Active Users</h3>
            <p className="text-2xl">1,000</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Revenue</h3>
            <p className="text-2xl">$12,345</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="font-semibold mb-4">Sales Chart</h2>
          <Chart />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-4">Items</h2>
          <Input
            placeholder="Filter items..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="mb-4"
          />
          <Table data={paginatedData} />
          <div className="flex justify-between mt-4">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span>Page {currentPage} of {totalPages}</span>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
