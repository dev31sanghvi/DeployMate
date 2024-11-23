import { useState, useEffect } from 'react';
import MonitorCard from '../components/MonitorCard';
import MonitorForm from '../components/MonitorForm';
import { createMonitor, getMonitors } from '../services/monitoringService';

export default function Dashboard() {
  const [monitors, setMonitors] = useState<{ url: string, status: string }[]>([]);

  useEffect(() => {
    fetchMonitors();
  }, []);

  const fetchMonitors = async () => {
    const data = await getMonitors();
    setMonitors(data);
    // console.log (setMonitors(data));
  };

  const handleAddMonitor = async (url: string) => {
    await createMonitor(url);
    fetchMonitors(); // Refresh monitor list
  };

  return (
    <div className="bg-background min-h-screen text-textPrimary p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Uptime Monitoring Dashboard</h1>
      <MonitorForm onSubmit={handleAddMonitor} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {monitors.map((monitor, index) => (
          <MonitorCard key={index} url={monitor.url} status={monitor.status} />
        ))}
      </div>
    </div>
  );
}