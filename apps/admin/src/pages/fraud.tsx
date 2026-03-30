import { useEffect, useState } from 'react';

export default function Fraud() {
  const [flags, setFlags] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/fraud/report');
      setFlags(await res.json());
    }
    load();
  }, []);

  return (
    <div>
      <h1>Fraud Report</h1>
      <ul>
        {flags.map((f) => (
          <li key={f.id}>{f.reason} — {f.createdAt}</li>
        ))}
      </ul>
    </div>
  );
}