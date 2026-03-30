import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

export default function KPIs() {
  const [data, setData] = useState<any>({ daily: [], totals: [] });

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/reports/kpis');
      const k = await res.json();
      setData({
        totals: [
          { name: 'Delivered', value: k.delivered },
          { name: 'Active', value: k.active },
          { name: 'Avg Delivery (min)', value: k.avgDeliveryMins },
        ],
        daily: k.daily || [],
      });
    }
    load();
  }, []);

  return (
    <div>
      <h1>KPIs</h1>

      <BarChart width={600} height={250} data={data.totals}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#4caf50" />
      </BarChart>

      <h2>Daily Deliveries</h2>
      <LineChart width={600} height={250} data={data.daily}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#2196f3" />
      </LineChart>
    </div>
  );
}