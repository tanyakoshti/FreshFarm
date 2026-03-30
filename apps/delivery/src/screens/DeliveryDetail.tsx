import { Button } from 'react-native';
import { openTurnByTurn } from '../utils/navigation';

export default function DeliveryDetail() {
  const customer = { lat: 12.9716, lng: 77.5946 };
  return <Button title="Start Navigation" onPress={() => openTurnByTurn(customer.lat, customer.lng)} />;
}