import * as Application from 'expo-application';
import * as Device from 'expo-device';

export function getDeviceFingerprint() {
  return {
    deviceId: Application.getInstallationIdAsync ? 'expo-install-id' : 'unknown',
    model: Device.modelName,
    os: Device.osName,
    osVersion: Device.osVersion,
  };
}