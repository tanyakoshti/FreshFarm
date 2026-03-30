import { useEffect, useState } from 'react';

export default function OrderTracking() {
  const [eta, setEta] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch(
        'https://api.example.com/v1/deliveries/route-mapbox?origin=12.97,77.59&destination=12.93,77.62'
      );
      const data = await res.json();
      setEta(data.etaMinutes);
    }, 30000); // refresh every 30s

    return () => clearInterval(interval);
  }, []);

  return null;
}