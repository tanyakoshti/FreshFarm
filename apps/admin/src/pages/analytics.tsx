import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

export default function Analytics() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/analytics/summary');
      const d = await res.json();
      setData([
        { name: 'Orders', value: d.orders },
        { name: 'Users', value: d.users },
        { name: 'Events', value: d.events },
      ]);
    }
    load();
  }, []);

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <BarChart width={500} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#4caf50" />
      </BarChart>
    </div>
  );
}