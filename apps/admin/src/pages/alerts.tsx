import { useEffect, useState } from 'react';

export default function Alerts() {
  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/alerts');
      setAlerts(await res.json());
    }
    load();
  }, []);

  return (
    <div>
      <h1>System Alerts</h1>
      <ul>
        {alerts.map((a) => (
          <li key={a.id}>{a.severity} — {a.message}</li>
        ))}
      </ul>
    </div>
  );
}