import { Linking, Platform } from 'react-native';

export function openTurnByTurn(lat: number, lng: number) {
  const url = Platform.select({
    ios: `http://maps.apple.com/?daddr=${lat},${lng}&dirflg=d`,
    android: `google.navigation:q=${lat},${lng}`,
  });
  Linking.openURL(url!);
}