import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    value: Math.floor(Math.random() * 100),
  }));

  const filteredData = data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold">Admin Dashboard</h2>
        <nav className="mt-4">
          <ul>
            <li><Button variant="outline" className="w-full text-left">Dashboard</Button></li>
            <li><Button variant="outline" className="w-full text-left">Settings</Button></li>
            <li><Button variant="outline" className="w-full text-left">Users</Button></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-white shadow-md">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-2xl">150</p>
          </Card>
          <Card className="p-4 bg-white shadow-md">
            <h3 className="text-lg font-semibold">Active Sessions</h3>
            <p className="text-2xl">75</p>
          </Card>
          <Card className="p-4 bg-white shadow-md">
            <h3 className="text-lg font-semibold">New Signups</h3>
            <p className="text-2xl">20</p>
          </Card>
        </div>
        <div className="mb-6 bg-gray-200 h-64 flex items-center justify-center">
          <span className="text-gray-500">Chart Placeholder</span>
        </div>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Filter items..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="mb-4"
          />
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map(item => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="flex justify-between mt-4">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span>Page {currentPage} of {totalPages}</span>
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
