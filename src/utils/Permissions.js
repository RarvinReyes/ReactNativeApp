import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';

export const GetLocationPermission = async () => {
  try {
    let status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (status === RESULTS.DENIED) {
      let result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      return result === RESULTS.GRANTED;
    } else if (status === RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
}

export const checkResults = async (permission) => {
  let result = await check(permission);
  try {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log('the feature is not available');
        break;
      case RESULTS.GRANTED:
        console.log('permission is granted');
        break;
      case RESULTS.DENIED:
        console.log('permission is denied and / or requestable');
        break;
      case RESULTS.BLOCKED:
        console.log('permission is denied and not requestable');
        break;
    }
  } catch (error) {
    console.error(error);
  }
}
